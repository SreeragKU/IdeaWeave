import React, { useState, useEffect, useContext } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Layout, Select, Row, Col, Input, Button, Modal } from "antd";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { UploadOutlined, EyeOutlined } from "@ant-design/icons";
import Media from "../media"
import { MediaContext } from "../../context/media";
import ImagePreviewModal from "../modal/ImagePreviewModal"

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

function EditPostComponent() {
  const [quillContent, setQuillContent] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [postId, setPostId] = useState("");
  const [coverImage, setCoverImage] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [media, setMedia] = useContext(MediaContext);

  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadPost();
  }, [router?.query?.slug]);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setLoadedCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPost = async () => {
    try {
      const { data } = await axios.get(`/post/${router.query.slug}`);
      setTitle(data.title);
      setQuillContent(data.content);
      setCoverImage(data.coverImage);
      setPostId(data._id);
      let arr = [];
      data.categories.map((c) => arr.push(c.name));
      setCategories(arr);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      const formattedQuillContent = `<div style="height: auto; font-size: 1.2rem; line-height: 1.6">${quillContent}</div>`;
  
      const { data } = await axios.put(`/edit-post/${postId}`, {
        title,
        content: formattedQuillContent, 
        categories,
        coverImage: media?.selected?._id
          ? media?.selected?._id
          : coverImage?._id
          ? coverImage._id
          : undefined,
      });
  
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        toast.success("Post updated successfully");
        setMedia({ ...media, selected: null });
        router.push("/admin/posts");
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error(err.response.data.message || "An error occurred");
      } else {
        toast.error("Post update failed. Try again.");
      }
      setLoading(false);
    }
  };
  
  const handleClick = () => {
    if (media?.selected) {
      setImagePreviewUrl(media?.selected?.url);
      setImagePreviewVisible(true);
    }
  };

  return (
    <>
      <Row>
        <Col span={14} offset={1}>
          <h1>Edit Book</h1>
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
          <Button
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            onClick={() => setMedia({ ...media, showMediaModal: true })}
          >
            <UploadOutlined /> Cover Image
          </Button>

          <h4>Categories</h4>
          <Select
            mode="multiple"
            allowClear={true}
            placeholder="Select categories"
            style={{ width: "100%" }}
            onChange={(v) => setCategories(v)}
            value={[...categories]}
          >
            {loadedCategories.map((item) => (
              <Option key={item.name}>{item.name}</Option>
            ))}
          </Select>
          <br />
          {media?.selected ? (
            <div
              style={{
                marginTop: "15px",
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              className="image-container"
              onMouseEnter={() => {
                const overlay = document.querySelector(".overlay");
                overlay.style.opacity = 1;
              }}
              onMouseLeave={() => {
                const overlay = document.querySelector(".overlay");
                overlay.style.opacity = 0;
              }}
              onClick={handleClick}
            >
              <img
                style={{
                  width: "100%",
                  transition: "transform 0.3s",
                }}
                src={media?.selected?.url}
                alt="Image"
              />
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              >
                <div
                  className="overlay-content"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <EyeOutlined style={{ fontSize: "25px", color: "white" }} />
                  <br />
                  Click to Preview
                </div>
              </div>
            </div>
          ) : coverImage?.url ? (
            <div
              style={{
                marginTop: "15px",
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              className="image-container"
              onMouseEnter={() => {
                const overlay = document.querySelector(".overlay");
                overlay.style.opacity = 1;
              }}
              onMouseLeave={() => {
                const overlay = document.querySelector(".overlay");
                overlay.style.opacity = 0;
              }}
              onClick={handleClick}
            >
              <img
                style={{
                  width: "100%",
                  transition: "transform 0.3s",
                }}
                src={coverImage?.url}
                alt="Image"
              />
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s", 
                }}
              >
                <div
                  className="overlay-content"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <EyeOutlined style={{ fontSize: "25px", color: "white" }} />
                  <br />
                  Click to Preview
                </div>
              </div>
            </div>
          ) : ''}
          <br />
          <Button
            loading={loading}
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            type="primary"
            onClick={handlePublish}
          >
            Update
          </Button>
        </Col>
      </Row>

      <ImagePreviewModal
        visible={imagePreviewVisible}
        imageUrl={imagePreviewUrl}
        onClose={() => setImagePreviewVisible(false)}
      />

      <Modal
        title="Preview"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
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

      <Modal
        visible={media.showMediaModal}
        title="Media"
        onOk={() => setMedia({ ...media, showMediaModal: false })}
        onCancel={() => setMedia({ ...media, showMediaModal: false })}
        width={720}
        footer={null}
      >
        <Media />
      </Modal>
    </>
  );
}

export default EditPostComponent;
