import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import htmlToMd from "html-to-md";
import axios from "axios";
import { Layout, Select, Row, Col, Input, Modal } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import dynamic from "next/dynamic";
import Resizer from "react-image-file-resizer";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const { Content } = Layout;
const { Option } = Select;
const quillModules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ align: [] }],
    ["link", "image", "video"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const quillFormats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "script",
  "align",
  "color",
  "background",
];

function NewPost() {
  const savedTitle =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("post-title")) || ""
      : "";
  const savedContent =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("post-content")) || ""
      : "";

  const [quillContent, setQuillContent] = useState(savedContent);
  const [title, setTitle] = useState(savedTitle);
  const [markdownContent, setMarkdownContent] = useState(""); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("post-title", JSON.stringify(title));
    }
  }, [title]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const markdown = convertToMarkdown(quillContent);
      setMarkdownContent(markdown);
      localStorage.setItem("post-content", JSON.stringify(markdown)); 
    }
  }, [quillContent]);
  

  function convertToMarkdown(htmlContent) {
    return htmlToMd(htmlContent); 
  }

  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setLoadedCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuillChange = async (content, delta, source, editor) => {
    const insertedImages = delta.ops.filter((op) => op.insert && op.insert.image);
    const insertedVideos = delta.ops.filter((op) => op.insert && op.insert.video);

    console.log("Uploaded Images:");
    for (const op of insertedImages) {
      if (op.insert.image.startsWith("data:image/")) {
        // The image is in base64 format, directly upload it
        const imageUrl = await uploadBase64Image(op.insert.image);
        if (imageUrl) {
          op.insert.image = imageUrl;
          console.log("Image URL (Uploaded from Base64):", imageUrl);
        }
      } else {
        // The image is not in base64 format, proceed with regular upload
        const imageUrl = await uploadImage(op.insert.image);
        if (imageUrl) {
          op.insert.image = imageUrl;
          console.log("Image URL:", imageUrl);
        }
      }
    }

    console.log("Uploaded Videos:");
    insertedVideos.forEach((op) => {
      console.log("Video URL:", op.insert.video);
    });

    setQuillContent(content);
  };

  const uploadBase64Image = async (base64Image) => {
    try {
      const blob = dataURItoBlob(base64Image);
      const imageUrl = await uploadImage(blob);
      return imageUrl;
    } catch (error) {
      console.error("Base64 image upload error:", error);
      return null;
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const uploadImage = async (file) => {
    try {
      // Resize the image
      const resizedImage = await resizeImage(file);
      console.log(resizedImage);
      // Send the resized image to the server using Axios
      const {data} = await axios.post('/upload-image',{resizedImage});
      // Handle the server's response here if needed
      console.log("Server response:", data);
      return data;
    } catch (error) {
      console.error("Image upload error:", error);
      return null;
    }
  }; 
  
  const resizeImage = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        720,
        400,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  return (
    <AdminLayout>
      <Row>
        <Col span={14} offset={1}>
          <h1>Create new post</h1>
          <Input
            value={title}
            size="large"
            placeholder="Give your post a title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <QuillNoSSRWrapper
            modules={quillModules}
            formats={quillFormats}
            placeholder="Compose here..."
            value={quillContent}
            onChange={handleQuillChange}
            theme="snow"
          />
          <br />
          <br />
        </Col>
        <Col span={6} offset={1}>
          <h4>Categories</h4>
          <Select
            mode="multiple"
            allowClear={true}
            placeholder="Select categories"
            style={{ width: "100%" }}
            onChange={(v) => setCategories(v)}
          >
            {loadedCategories.map((item) => (
              <Option key={item.name}>{item.name}</Option>
            ))}
          </Select>
        </Col>
      </Row>
    </AdminLayout>
  );
}

export default NewPost;