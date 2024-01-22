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

const quillWrapperStyles = {
  height: "500px",
  overflowY: "auto",
  padding: "20px",
};

function NewPostComponent({ page = "admin" }) {
  const [step, setStep] = useState(0);
  const [quillContent, setQuillContent] = useState({});
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { Step } = Steps;

  const [media, setMedia] = useContext(MediaContext);

  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const [expandedPanels, setExpandedPanels] = useState([]);

  // Step 1: Book Title and Cover Image
  const [title, setTitle] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("post-title")) || ""
      : ""
  );

  // Step 2: Volumes and Chapters
  const [volumes, setVolumes] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("post-volumes")) || [
          {
            volume: "",
            chapters: [{ chapter: "1", name: "", content: "" }],
          },
        ]
      : [
          {
            volume: "",
            chapters: [{ chapter: "1", name: "", content: "" }],
          },
        ]
  );

  const loadChapterContents = () => {
    const storedVolumes =
      JSON.parse(localStorage.getItem("post-volumes")) || [];
    const content = storedVolumes.reduce((acc, volume, volumeIndex) => {
      const chapterContent = volume.chapters.reduce(
        (chapterAcc, chapter, chapterIndex) => {
          const key = `${volumeIndex}-${chapterIndex}`;
          const chapterLocalStorageKey = `post-chapter-${key}`;
          const storedChapter = JSON.parse(
            localStorage.getItem(chapterLocalStorageKey)
          );

          // Update post-volumes with loaded content
          const updatedVolumes = [...storedVolumes];
          updatedVolumes[volumeIndex].chapters[chapterIndex].content =
            storedChapter ? storedChapter.content || "" : "";

          localStorage.setItem("post-volumes", JSON.stringify(updatedVolumes));

          return {
            ...chapterAcc,
            [key]: storedChapter ? storedChapter.content || "" : "",
          };
        },
        {}
      );
      return { ...acc, ...chapterContent };
    }, {});
    setQuillContent(content);
  };

  const handleNextStep = () => {
    if (step === 0) {
      // Step 1 validation
      if (!title || !media?.selected) {
        toast.error("Please enter a title and select a cover image.");
        return;
      }
      localStorage.setItem("post-title", JSON.stringify(title));
    } else if (step === 1) {
      // Step 2 validation
      const invalidVolumes = volumes.filter(
        (v) =>
          !v.volume ||
          v.chapters.length < 1 ||
          !v.chapters.every((c) => c.name && c.content)
      );
      if (invalidVolumes.length > 0) {
        toast.error(
          "Please enter valid volume names and ensure each chapter has a name and content."
        );
        return;
      }
      // Ensure that each chapter has initial values
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
    } else if (step === 2) {
      // Step 3 validation
      if (selectedCategories.length === 0) {
        toast.error("Please choose at least one category before publishing.");
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    loadCategories();
    loadChapterContents();
  }, []);

  useEffect(() => {
    const storedCoverImage = JSON.parse(localStorage.getItem("post-image"));
    if (storedCoverImage) {
      setMedia({ ...media, selected: storedCoverImage });
    }
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setLoadedCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveChapter = (volumeIndex, chapterIndex) => {
    const updatedVolumes = [...volumes];

    // Remove the selected chapter
    updatedVolumes[volumeIndex].chapters.splice(chapterIndex, 1);

    // Renumber the remaining chapters
    updatedVolumes[volumeIndex].chapters.forEach((chapter, index) => {
      chapter.chapter = index + 1;
      chapter.name = `Chapter ${chapter.chapter}`;
    });

    // Remove corresponding data from local storage
    const key = `${volumeIndex}-${chapterIndex}`;
    const chapterLocalStorageKey = `post-chapter-${key}`;
    localStorage.removeItem(chapterLocalStorageKey);

    // Update state
    setVolumes(updatedVolumes);
    setQuillContent((prevContent) => {
      const { [key]: removed, ...rest } = prevContent;
      return rest;
    });
  };

  const getChapterContentFromLocalStorage = (volumeIndex, chapterIndex) => {
    const key = `${volumeIndex}-${chapterIndex}`;
    const chapterLocalStorageKey = `post-chapter-${key}`;
    const storedChapter = JSON.parse(
      localStorage.getItem(chapterLocalStorageKey)
    );
    return storedChapter?.content || "";
  };

  const handleRemoveVolume = (volumeIndex) => {
    const updatedVolumes = [...volumes];

    // Remove the selected volume
    const removedVolume = updatedVolumes.splice(volumeIndex, 1)[0];

    // Remove corresponding data from local storage for the volume
    const removedVolumeKey = `volume-${volumeIndex}`;
    localStorage.removeItem(removedVolumeKey);

    // Remove corresponding data from local storage for each chapter in the volume
    removedVolume.chapters.forEach((_, chapterIndex) => {
      const key = `${volumeIndex}-${chapterIndex}`;
      const chapterLocalStorageKey = `post-chapter-${key}`;
      localStorage.removeItem(chapterLocalStorageKey);
    });

    // Update state
    setVolumes(updatedVolumes);
    setQuillContent((prevContent) => {
      // Remove content corresponding to the removed volume
      const volumeContentKeys = Object.keys(prevContent).filter((key) =>
        key.startsWith(`${volumeIndex}-`)
      );
      const { [removedVolumeKey]: removedVolumeData, ...rest } = prevContent;
      return volumeContentKeys.reduce((acc, key) => {
        // Remove each chapter's content corresponding to the removed volume
        const chapterLocalStorageKey = `post-chapter-${key}`;
        localStorage.removeItem(chapterLocalStorageKey);
        return { ...acc, [key]: prevContent[key] };
      }, rest);
    });
  };

  const [selectedCategories, setSelectedCategories] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("selected-categories")) || []
      : []
  );

  const handlePublish = async () => {
    try {
      setLoading(true);

      const formattedVolumesChapters = volumes
        .filter((v) => v.volume && v.chapters.length >= 1)
        .map((v, volumeIndex) => {
          const formattedChapters = v.chapters
            .map((c, chapterIndex) => {
              return {
                chapterNumber: c.chapter,
                chapterName: c.name,
                chapterContent:
                  quillContent[`${volumeIndex}-${chapterIndex}`]?.content ||
                  getChapterContentFromLocalStorage(
                    volumeIndex,
                    chapterIndex
                  ) ||
                  "",
              };
            })
            .filter((chapter) => chapter.chapterContent.trim() !== "");

          return {
            volumeName: v.volume,
            chapters: formattedChapters,
          };
        });

      const formattedContent = `<div style="font-size: 1.2rem; line-height: 1.6">${formattedVolumesChapters}</div>`;

      // Prepare data to send to the server
      const postData = {
        title,
        content: formattedContent,
        categories: selectedCategories,
        coverImage: media?.selected?._id,
        volumes: volumes.map((volume, volumeIndex) => ({
          volume: volume.volume,
          chapters: volume.chapters.map((chapter, chapterIndex) => {
            if (!chapter.chapter) {
              toast.error("Chapter number cannot be empty");
            }
            return {
              chapter: chapter.chapter,
              name: chapter.name,
              content:
                quillContent[`${volumeIndex}-${chapterIndex}`]?.content ||
                getChapterContentFromLocalStorage(volumeIndex, chapterIndex) ||
                "",
            };
          }),
        })),
      };

      const { data } = await axios.post("/create-post", postData);

      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        // Clear local storage
        localStorage.removeItem("post-title");
        localStorage.removeItem("post-volumes");
        Object.keys(quillContent).forEach((key) => {
          const chapterLocalStorageKey = `post-chapter-${key}`;
          localStorage.removeItem(chapterLocalStorageKey);
        });
        localStorage.removeItem("post-image");

        setMedia({ ...media, selected: null });

        router.push(`/${page}/posts`);
        toast.success("Post created successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Post create failed. Try again.");
      setLoading(false);
    }
  };

  const handleSaveToDraft = async () => {
    try {
      setLoading(true);

      const formattedVolumesChapters = volumes
        .filter((v) => v.volume && v.chapters.length >= 1)
        .map((v, volumeIndex) => {
          const formattedChapters = v.chapters
            .map((c, chapterIndex) => {
              return {
                chapterNumber: c.chapter,
                chapterName: c.name,
                chapterContent:
                  quillContent[`${volumeIndex}-${chapterIndex}`]?.content ||
                  getChapterContentFromLocalStorage(
                    volumeIndex,
                    chapterIndex
                  ) ||
                  "",
              };
            })
            .filter((chapter) => chapter.chapterContent.trim() !== "");

          return {
            volumeName: v.volume,
            chapters: formattedChapters,
          };
        });

      const formattedContent = `<div style="font-size: 1.2rem; line-height: 1.6">${formattedVolumesChapters}</div>`;

      // Prepare data to send to the server
      const postData = {
        title,
        content: formattedContent,
        categories: selectedCategories,
        coverImage: media?.selected?._id,
        volumes: volumes.map((volume, volumeIndex) => ({
          volume: volume.volume,
          chapters: volume.chapters.map((chapter, chapterIndex) => {
            if (!chapter.chapter) {
              toast.error("Chapter number cannot be empty");
            }
            return {
              chapter: chapter.chapter,
              name: chapter.name,
              content:
                quillContent[`${volumeIndex}-${chapterIndex}`]?.content ||
                getChapterContentFromLocalStorage(volumeIndex, chapterIndex) ||
                "",
            };
          }),
        })),
      };

      const { data } = await axios.post("/create-draft", postData);

      if (data?.error) {
        toast.error(data?.error);
        setLoading(false);
      } else {
        // Clear local storage
        localStorage.removeItem("post-title");
        localStorage.removeItem("post-volumes");
        Object.keys(quillContent).forEach((key) => {
          const chapterLocalStorageKey = `post-chapter-${key}`;
          localStorage.removeItem(chapterLocalStorageKey);
        });
        localStorage.removeItem("post-image");

        setMedia({ ...media, selected: null });

        router.push(`/${page}/posts/drafts`);
        toast.success("Post created successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Post create failed. Try again.");
      setLoading(false);
    }
  };
  

  return (
    <>
      <Row justify="center" style={{ paddingLeft: 50, paddingTop: "50px", paddingRight: 50 }}>
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
                {media?.selected && (
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
              <Card style={{ marginBottom: "20px" }}>
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
                      <div style={{ marginBottom: "10px" }}></div>
                      <Tabs tabPosition="left">
                        {volume.chapters.map((chapter, chapterIndex) => (
                          <TabPane
                            key={`chapter-${volumeIndex}-${chapterIndex}`}
                            tab={`Chapter ${chapterIndex + 1}`}
                          >
                            <div style={{ marginBottom: "10px" }}>
                              <Button
                                style={{ marginRight: "8px" }}
                                type="danger"
                                onClick={() =>
                                  handleRemoveChapter(volumeIndex, chapterIndex)
                                }
                              >
                                Remove Chapter {chapterIndex + 1}
                              </Button>
                              <span>{`Chapter ${chapterIndex + 1}: ${
                                chapter.name
                              }`}</span>
                            </div>
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
                            <div style={quillWrapperStyles}>
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
                                style={{ height: "400px", marginTop: "10px" }}
                              />
                            </div>
                          </TabPane>
                        ))}
                      </Tabs>

                      <Button
                        style={{ margin: "10px 0px 20px", width: "100%" }}
                        type="dashed"
                        icon={<PlusOutlined />}
                        onClick={() => {
                          const updatedVolumes = [...volumes];
                          const lastChapterIndex =
                            updatedVolumes[volumeIndex].chapters.length - 1;
                          const newChapterNumber =
                            lastChapterIndex >= 0
                              ? parseInt(
                                  updatedVolumes[volumeIndex].chapters[
                                    lastChapterIndex
                                  ].chapter,
                                  10
                                ) + 1
                              : 1;

                          updatedVolumes[volumeIndex].chapters.push({
                            name: `Chapter ${newChapterNumber}`,
                            chapter: newChapterNumber.toString(),
                            content: "",
                          });

                          setVolumes(updatedVolumes);
                        }}
                      >
                        Add Chapter
                      </Button>

                      <Button
                        style={{ margin: "10px 0px 20px", width: "100%" }}
                        onClick={() => handleRemoveVolume(volumeIndex)}
                      >
                        Remove Volume {volumeIndex + 1}
                      </Button>
                    </Panel>
                  ))}
                </Collapse>

                <Button
                  style={{ margin: "10px 0px 20px", width: "100%" }}
                  type="dashed"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    const updatedVolumes = [...volumes];

                    const newVolume = {
                      volume: "",
                      chapters: [
                        { chapter: "1", name: "Chapter 1", content: "" },
                      ],
                    };

                    updatedVolumes.push(newVolume);

                    setVolumes(updatedVolumes);
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

                {media?.selected && (
                  <div
                    style={{
                      marginBottom: "20px",
                      overflow: "hidden",
                      borderRadius: "8px",
                      maxHeight: "200px",
                      cursor: "pointer",
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
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={media.selected.url}
                      alt="Cover Image"
                    />
                  </div>
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
                        {volume.chapters.map((chapter, chapterIndex) => {
                          const key = `${volumeIndex}-${chapterIndex}`;
                          const loadedContent =
                            quillContent[key]?.content || ""; // Content loaded from localStorage
                          const currentContent = chapter.content || ""; // Current content

                          return (
                            <TabPane
                              tab={`Chapter ${chapterIndex + 1}: ${
                                chapter.name
                              }`}
                              key={key}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html:
                                    currentContent !== loadedContent
                                      ? currentContent
                                      : loadedContent,
                                }}
                                style={{
                                  fontSize: "1.2rem",
                                  lineHeight: "1.6",
                                  padding: "20px",
                                }}
                              />
                            </TabPane>
                          );
                        })}
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
                <div style={{ marginBottom: "10px" }}></div>

                <Button
                  style={{ margin: "10px 0px 20px", width: "100%" }}
                  type="primary"
                  loading={loading}
                  onClick={handleSaveToDraft}
                >
                  Save to Draft
                </Button>

                <Button
                  style={{ width: "100%", marginBottom: "10px" }}
                  type="primary"
                  loading={loading}
                  icon={<EditOutlined />}
                  onClick={() => {
                    // Step 3 validation
                    if (selectedCategories.length === 0) {
                      toast.error(
                        "Please choose at least one category before publishing."
                      );
                      return;
                    }
                    handlePublish();
                  }}
                >
                  Publish
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

export default NewPostComponent;
