import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import htmlToMd from "html-to-md";
import axios from "axios";
import { Layout, Select, Row, Col, Input, Button, Modal} from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import dynamic from "next/dynamic";
import {toast} from "react-hot-toast";
import {useRouter} from "next/router";

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
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
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
  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("post-title", JSON.stringify(title));
    }
  }, [title]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Convert Quill content to Markdown
      const markdown = convertToMarkdown(quillContent);

      setMarkdownContent(markdown);

      // Store the content in localStorage
      localStorage.setItem("post-content", JSON.stringify(markdown));
    }
  }, [quillContent]);

  useEffect(() => {
    loadCategories();
  }, []);

  function convertToMarkdown(htmlContent) {
    return htmlToMd(htmlContent);
  }

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setLoadedCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/create-post", {
        title,
        content: quillContent,
        categories,
      });
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        //console.log("POST PUBLISHED RES => ", data);
        toast.success("Post created successfully");
        localStorage.removeItem("post-title");
        localStorage.removeItem("post-content");
        router.push("/admin/posts");
      }
    } catch (err) {
      console.log(err);
      toast.error("Post create failed. Try again.");
      setLoading(false);
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
            onChange={(content, delta, source, editor) => {
              setQuillContent(content);
            }}
            theme="snow"
            style={{ height: "400px" }}
          />
        </Col>
        <Col span={6} offset={1}>
        <Button
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            onClick={() => setVisible(true)}
          >
            Preview
          </Button>

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
          <Button
            loading={loading}
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            type="primary"
            onClick={handlePublish}
          >
            Publish
          </Button>
        </Col>
      </Row>
      <Modal
        title="Preview"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={()=>setVisible(false)}
        width={720}
        footer={null}
      >
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: quillContent, 
          }}
        />
      </Modal>
    </AdminLayout>
  );
}

export default NewPost;
