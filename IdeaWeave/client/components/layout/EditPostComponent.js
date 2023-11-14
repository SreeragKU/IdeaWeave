import React, { useState, useEffect, useContext } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {
  Layout,
  Select,
  Row,
  Col,
  Input,
  Button,
  Modal,
  Card,
  Collapse,
  Tabs,
  Steps,
} from "antd";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import {
  UploadOutlined,
  EyeOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Media from "../media";
import { MediaContext } from "../../context/media";
import ImagePreviewModal from "../modal/ImagePreviewModal";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const { Content } = Layout;
const { Option } = Select;
const { Panel } = Collapse;
const { TabPane } = Tabs;

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
  "script",
  "color",
  "background",
];

function EditPostComponent({ user }) {
  const [quillContent, setQuillContent] = useState({});
  const [title, setTitle] = useState("");
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [postId, setPostId] = useState("");
  const [coverImage, setCoverImage] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [media, setMedia] = useContext(MediaContext);
  const [step, setStep] = useState(0);
  const { Step } = Steps;

  const [volumes, setVolumes] = useState([]);
  const [loadPostVolumes, setLoadPostVolumes] = useState([]);

  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    loadCategories();
    loadPost();
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

      // Extract volumes and chapters from the loaded data
      const loadedVolumes = data.volumes.map((volume) => ({
        volume: volume.volume,
        chapters: volume.chapters.map((chapter) => ({
          name: chapter.name,
          content: chapter.content,
        })),
      }));

      // Set the loaded volumes to the state
      setLoadPostVolumes(loadedVolumes);
      setVolumes(loadedVolumes); // Set the volumes state

      // ... rest of the function ...
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  

  const handlePublish = async () => {
    try {
      setLoading(true);

      const formattedVolumesChapters = volumes
        .filter((v) => v.volume && v.chapters.length >= 1)
        .map(
          (v, volumeIndex) =>
            `${v.volume}: ${v.chapters
              .map(
                (c, chapterIndex) =>
                  `Chapter ${c.chapter || "1"}: ${c.name} - ${
                    quillContent[`${volumeIndex}-${chapterIndex}`]?.content ||
                    ""
                  }`
              )
              .join(", ")}`
        )
        .join("; ");

      const formattedContent = `<div style="font-size: 1.2rem; line-height: 1.6">${formattedVolumesChapters}</div>`;

      // Prepare data to send to the server
      const postData = {
        title,
        content: formattedContent,
        categories: selectedCategories,
        coverImage: media?.selected?._id
          ? media?.selected?._id
          : coverImage?._id
          ? coverImage._id
          : undefined,
        volumes: volumes.map((volume, volumeIndex) => ({
          volume: volume.volume,
          chapters: volume.chapters.map((chapter, chapterIndex) => ({
            chapter: chapter.chapter,
            name: chapter.name,
            content:
              quillContent[`${volumeIndex}-${chapterIndex}`]?.content || "",
          })),
        })),
      };

      const { data } = await axios.put(`/edit-post/${postId}`, postData);

      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        localStorage.removeItem("post-title");
        localStorage.removeItem("post-volumes");
        Object.keys(quillContent).forEach((key) => {
          const chapterLocalStorageKey = `post-chapter-${key}`;
          localStorage.removeItem(chapterLocalStorageKey);
        });
        localStorage.removeItem("post-image");

        setMedia({ ...media, selected: null });
        router.push(`/${page}/posts`);
        toast.success("Post updated successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Post update failed. Try again.");
      setLoading(false);
    }
  };

  const handleNextStep = () => {
    if (step === 0) {
      localStorage.setItem("post-title", JSON.stringify(title));
    } else if (step === 1) {
      // Load previous volumes and image from local storage
      const loadedVolumesFromLocalStorage = JSON.parse(localStorage.getItem("post-volumes")) || [];
      const loadedImageFromLocalStorage = JSON.parse(localStorage.getItem("post-image")) || {};
  
      // Check if volumes and chapters have been modified
      const volumesChanged = volumes.some((v, volumeIndex) => {
        const loadedVolume = loadedVolumesFromLocalStorage[volumeIndex] || {};
  
        if (v.volume !== loadedVolume.volume) {
          return true;
        }
  
        return v.chapters.some((chapter, chapterIndex) => {
          const loadedChapter = loadedVolume.chapters?.[chapterIndex] || {};
  
          return (
            chapter.name !== loadedChapter.name ||
            chapter.content !== loadedChapter.content
          );
        });
      });
  
      if (!volumesChanged) {
        // Volumes and chapters have not been modified, use the loaded values
        localStorage.setItem("post-volumes", JSON.stringify(loadedVolumesFromLocalStorage));
        localStorage.setItem("post-image", JSON.stringify(loadedImageFromLocalStorage));
      } else {
        // Volumes and chapters have been modified, store the updated values
        const updatedVolumes = volumes.map((volume) => ({
          volume: volume.volume,
          chapters: volume.chapters.map((chapter) => ({
            chapter: chapter.chapter || "1",
            name: chapter.name || "Untitled",
            content: chapter.content || "",
          })),
        }));
  
        localStorage.setItem("post-volumes", JSON.stringify(updatedVolumes));
        localStorage.setItem("post-image", JSON.stringify(media?.selected));
      }
    }
  
    setStep(step + 1);
  };
  
  

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col span={18}>
          <Card style={{ padding: "20px", marginBottom: "20px" }}>
            <Steps current={step} style={{ marginBottom: "20px" }}>
              <Step title="Book Info" />
              <Step title="Volumes and Chapters" />
              <Step title="Review and Publish" />
            </Steps>

            {step === 0 && (
              <Card>
                <h1>Create a new Book</h1>
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
                <Button
                  style={{ margin: "10px 0px 10px 0px", width: "100%" }}
                  onClick={() => setMedia({ ...media, showMediaModal: true })}
                >
                  <UploadOutlined /> Cover Image
                </Button>
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
                    onClick={() => {
                      if (media?.selected) {
                        setImagePreviewUrl(media?.selected?.url);
                        setImagePreviewVisible(true);
                      }
                    }}
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
                        <EyeOutlined
                          style={{ fontSize: "25px", color: "white" }}
                        />
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
                    onClick={() => {
                      if (media?.selected) {
                        setImagePreviewUrl(media?.selected?.url);
                        setImagePreviewVisible(true);
                      }
                    }}
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
                        <EyeOutlined
                          style={{ fontSize: "25px", color: "white" }}
                        />
                        <br />
                        Click to Preview
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <br />
                <Button
                  style={{ margin: "10px 0px 10px 0px", width: "100%" }}
                  type="primary"
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </Card>
            )}

            {step === 1 && (
              <Card>
                <h1>Volumes and Chapters</h1>

                <Collapse accordion>
                  {volumes.map((volume, volumeIndex) => (
                    <Panel
                      key={`volume-${volumeIndex}`}
                      header={`Volume ${volumeIndex + 1}`}
                    >
                      <Input
                        value={volume.volume}
                        size="large"
                        placeholder={`Volume ${volumeIndex + 1}`}
                        onChange={(e) => {
                          const updatedVolumes = [...volumes];
                          updatedVolumes[volumeIndex].volume = e.target.value;
                          setVolumes(updatedVolumes);
                        }}
                      />

                      <Tabs tabPosition="left">
                        {volume.chapters.map((chapter, chapterIndex) => (
                          <TabPane
                            key={`chapter-${volumeIndex}-${chapterIndex}`}
                            tab={`Chapter ${chapterIndex + 1}`}
                          >
                            <Input
                              value={chapter.name}
                              placeholder={`Chapter ${chapterIndex + 1} Name`}
                              onChange={(e) => {
                                const updatedVolumes = [...volumes];
                                updatedVolumes[volumeIndex].chapters[
                                  chapterIndex
                                ].name = e.target.value;
                                setVolumes(updatedVolumes);
                              }}
                            />
                            <QuillNoSSRWrapper
                              modules={quillModules}
                              formats={quillFormats}
                              placeholder="Compose here..."
                              value={chapter.content}
                              onChange={(content, delta, source, editor) => {
                                const updatedVolumes = [...volumes];
                                updatedVolumes[volumeIndex].chapters[
                                  chapterIndex
                                ].content = content;
                                setVolumes(updatedVolumes);

                                const key = `${volumeIndex}-${chapterIndex}`;
                                setQuillContent({
                                  ...quillContent,
                                  [key]: {
                                    content,
                                    name: `Chapter ${chapterIndex + 1}: ${
                                      chapter.name
                                    }`,
                                  },
                                });

                                // Store chapter content and name separately in local storage
                                const chapterLocalStorageKey = `post-chapter-${key}`;
                                localStorage.setItem(
                                  chapterLocalStorageKey,
                                  JSON.stringify({
                                    content,
                                    name: `Chapter ${chapterIndex + 1}: ${
                                      chapter.name
                                    }`,
                                  })
                                );
                              }}
                              theme="snow"
                              style={{ height: "400px" }}
                            />
                          </TabPane>
                        ))}
                      </Tabs>

                      <Button
                        style={{ margin: "10px 0px 20px", width: "100%" }}
                        type="dashed"
                        icon={<PlusOutlined />}
                        onClick={() => {
                          const updatedVolumes = [...volumes];
                          updatedVolumes[volumeIndex].chapters.push({
                            name: "", // Add the name property
                            chapter: "",
                            content: "",
                          });
                          setVolumes(updatedVolumes);
                        }}
                      >
                        Add Chapter
                      </Button>
                    </Panel>
                  ))}
                </Collapse>

                <Button
                  style={{ margin: "10px 0px 20px", width: "100%" }}
                  type="dashed"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setVolumes([
                      ...volumes,
                      {
                        volume: "",
                        chapters: [{ chapter: "", content: "" }],
                      },
                    ]);
                  }}
                >
                  Add Volume
                </Button>

                <Row justify="space-between" style={{ marginTop: "20px" }}>
                  <Col>
                    <Button type="primary" onClick={handlePrevStep}>
                      Previous
                    </Button>
                  </Col>
                  <Col>
                    <Button type="primary" onClick={handleNextStep}>
                      Next
                    </Button>
                  </Col>
                </Row>
              </Card>
            )}

            {step === 2 && (
              <Card
                style={{ maxWidth: "800px", margin: "auto", marginTop: "20px" }}
              >
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                  Review and Publish
                </h1>

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
                    onClick={() => {
                      if (media?.selected) {
                        setImagePreviewUrl(media?.selected?.url);
                        setImagePreviewVisible(true);
                      }
                    }}
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
                        <EyeOutlined
                          style={{ fontSize: "25px", color: "white" }}
                        />
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
                    onClick={() => {
                      if (media?.selected) {
                        setImagePreviewUrl(media?.selected?.url);
                        setImagePreviewVisible(true);
                      }
                    }}
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
                        <EyeOutlined
                          style={{ fontSize: "25px", color: "white" }}
                        />
                        <br />
                        Click to Preview
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <h2>Book Title:</h2>
                <p>{title}</p>
                <h2>Volumes and Chapters:</h2>
                <Tabs
                  defaultActiveKey="0"
                  type="card"
                  style={{ marginBottom: "20px" }}
                >
                  {volumes.map((volume, volumeIndex) => (
                    <TabPane
                      tab={`Volume ${volumeIndex + 1}: ${volume.volume}`}
                      key={volumeIndex.toString()}
                    >
                      <Tabs type="card">
                        {volume.chapters.map((chapter, chapterIndex) => (
                          <TabPane
                          tab={`Chapter ${chapterIndex + 1}: ${chapter.name}`}
                          key={`${volumeIndex}-${chapterIndex}`}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                (loadPostVolumes[volumeIndex]?.chapters[chapterIndex]?.content ||
                                  "") || "", // Check for undefined or null
                            }}
                            style={{
                              fontSize: "1.2rem",
                              lineHeight: "1.6",
                              padding: "20px",
                            }}
                          />
                        </TabPane>

                        ))}
                      </Tabs>
                    </TabPane>
                  ))}
                </Tabs>

                <h2>Categories:</h2>
                <h4>Select categories for your post:</h4>
                <Select
                  mode="multiple"
                  allowClear={true}
                  placeholder="Select categories"
                  style={{ width: "100%" }}
                  value={selectedCategories}
                  onChange={(v) => setSelectedCategories(v)}
                >
                  {loadedCategories.map((item) => (
                    <Option key={item.name}>{item.name}</Option>
                  ))}
                </Select>

                <Button
                  style={{ width: "100%", marginBottom: "20px" }}
                  type="primary"
                  loading={loading}
                  icon={<EditOutlined />}
                  onClick={handlePublish}
                >
                  Update
                </Button>

                <Button
                  style={{ margin: "10px 0px 10px 0px", width: "100%" }}
                  type="primary"
                  onClick={handlePrevStep}
                >
                  Previous
                </Button>
              </Card>
            )}
          </Card>
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
        <h1 style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: quillContent,
          }}
          style={{ fontSize: "1.2rem", lineHeight: "1.6" }}
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
        <Media style={{ fontSize: "1.2rem", lineHeight: "1.6" }} />
      </Modal>
    </>
  );
}

export default EditPostComponent;
