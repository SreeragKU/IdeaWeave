import { Layout, Select, Row, Col, Input } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import htmlToMd from "html-to-md";
import axios from "axios";

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
  // Load from local storage (only on the client side)
  const savedTitle =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("post-title")) || ""
      : "";
  const savedContent =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("post-content")) || ""
      : "";

  // Initialize state with the saved values or defaults
  const [quillContent, setQuillContent] = useState(savedContent);
  const [title, setTitle] = useState(savedTitle);

  useEffect(() => {
    // Save the title to local storage whenever it changes (only on the client side)
    if (typeof window !== "undefined") {
      localStorage.setItem("post-title", JSON.stringify(title));
    }
  }, [title]);

  useEffect(() => {
    // Save the quillContent as markdown to local storage whenever it changes (only on the client side)
    if (typeof window !== "undefined") {
      localStorage.setItem("post-content", JSON.stringify(quillContent));
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
            onChange={(v) => {
              setQuillContent(v);
            }}
            theme="snow"
          />

          <br />
          <br />
          <pre>{JSON.stringify(loadedCategories, null, 4)}</pre>
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