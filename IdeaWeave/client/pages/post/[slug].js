import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Typography, Button, Select, List, Avatar } from "antd";
import Head from "next/head";
import dynamic from "next/dynamic";
import BookFront from "./BookFront";
import BubbleNav from "../../components/nav/BubbleNav";
import { Spin } from "antd";
import dayjs from "dayjs";
import CommentForm from "../../components/comments/CommentForm";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const { Title } = Typography;
const { Option } = Select;

const ReactQuillNoSSR = dynamic(() => import("react-quill"), {
  ssr: false,
});

const themes = {
  Default: {
    fontSize: 1.2,
    lineHeight: 1.6,
    backgroundColor: "#F0F2F5",
    color: "black",
  },
  Fire: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: "#FF6B6B",
    color: "black",
  },
  Ocean: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: "#36A2A6",
    color: "white",
  },
  Forest: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: "#4CAF50",
    color: "white",
  },
  Sunset: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: "#FFAC5D",
    color: "black",
  },
  Midnight: {
    fontSize: 1.2,
    lineHeight: 1.6,
    backgroundColor: "#20232A",
    color: "white",
  },
};

const ReadOnlyQuill = ({ content, theme, zoomLevel }) => {
  const quillStyle = {
    height: "auto",
    fontSize: `${themes[theme].fontSize * zoomLevel}rem`,
    lineHeight: `${themes[theme].lineHeight * zoomLevel}`,
    backgroundColor: themes[theme].backgroundColor,
    color: themes[theme].color,
    padding: "16px",
  };

  return (
    <div>
      <ReactQuillNoSSR
        value={content}
        readOnly={true}
        theme="bubble"
        modules={{ toolbar: false }}
        style={quillStyle}
      />
    </div>
  );
};

const SinglePost = ({ post, postComments }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState("Default");
  const [postContent, setPostContent] = useState(post.content);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [comments, setComments] = useState(postComments);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const reloadFlagKey = "hasReloadedFlag";

  const handleZoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleTextToSpeech = () => {
    sendPostContentToBubbleNav(post.content);
  };

  const handleNextChapter = () => {
    if (currentChapter < post.volumes[currentVolume].chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    } else {
      if (currentVolume < post.volumes.length - 1) {
        setCurrentVolume(currentVolume + 1);
        setCurrentChapter(0);
      }
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    } else {
      if (currentVolume > 0) {
        setCurrentVolume(currentVolume - 1);
        setCurrentChapter(post.volumes[currentVolume - 1].chapters.length - 1);
      }
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasReloaded =
      typeof window !== "undefined" &&
      window.localStorage.getItem(reloadFlagKey) === "true";

    const shouldReload = !hasReloaded;

    const handleReload = () => {
      if (shouldReload) {
        setIsLoading(true);
        window.localStorage.setItem(reloadFlagKey, "true");
        window.location.reload();
      }
    };

    handleReload();
    if (hasReloaded) {
      window.localStorage.removeItem(reloadFlagKey);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);
  
  const handleSelect = (value) => {
    const [selectedVolume, selectedChapter] = value.split(":").map(Number);

    setCurrentVolume(selectedVolume - 1);
    setCurrentChapter(selectedChapter - 1);
  };

  const isAtFirstChapter = currentVolume === 0 && currentChapter === 0;
  const isAtLastChapter =
    currentVolume === post.volumes.length - 1 &&
    currentChapter === post.volumes[currentVolume].chapters.length - 1;

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/comment/${post._id}`, { comment });
      setComments([data, ...comments]);
      setComment("");
      toast.success("Comment posted successfully");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            overflow: "hidden", // Lock scroll when loading
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        </div>
      )}

      <BubbleNav
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onThemeChange={handleThemeChange}
        onTextToSpeech={handleTextToSpeech}
        postContent={postContent}
        post={post}
        currentVolume={currentVolume}
        currentChapter={currentChapter}
      />

      <BookFront post={post} />
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>
      <Row justify="center">
        <Col xs={24} xl={16}>
          <Card>
            <div style={{ marginBottom: 16, textAlign: "center" }}>
              <Button
                type="primary"
                onClick={handlePrevChapter}
                disabled={isAtFirstChapter}
              >
                Previous Chapter
              </Button>{" "}
              <Select
                value={`${currentVolume + 1}:${currentChapter + 1}`}
                style={{
                  width: 200,
                  marginRight: 8,
                  borderRadius: 8,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
                dropdownStyle={{ borderRadius: 8 }}
                onChange={handleSelect}
              >
                {post.volumes.map((volume, volumeIndex) => (
                  <Select.OptGroup
                    label={`Volume ${volumeIndex + 1}: ${volume.volume}`}
                    key={`volume-${volumeIndex}`}
                  >
                    {volume.chapters.map((chapter, chapterIndex) => (
                      <Option
                        key={`${volumeIndex}-${chapterIndex}`}
                        value={`${volumeIndex + 1}:${chapterIndex + 1}`}
                        style={{ padding: 10 }}
                      >
                        {`${chapter.name}`}
                      </Option>
                    ))}
                  </Select.OptGroup>
                ))}
              </Select>
              <Button
                type="primary"
                onClick={handleNextChapter}
                disabled={isAtLastChapter}
              >
                Next Chapter
              </Button>{" "}
            </div>
            <ReadOnlyQuill
              content={
                post.volumes[currentVolume].chapters[currentChapter].content
              }
              theme={selectedTheme}
              zoomLevel={zoomLevel}
            />
            <div
              style={{
                marginBottom: 16,
                textAlign: "center",
                marginTop: 16,
              }}
            >
              <Button
                type="primary"
                onClick={handlePrevChapter}
                disabled={isAtFirstChapter}
              >
                Previous Chapter
              </Button>{" "}
              <Select
                value={`${currentVolume + 1}:${currentChapter + 1}`}
                style={{
                  width: 200,
                  marginRight: 8,
                  borderRadius: 8,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
                dropdownStyle={{ borderRadius: 8 }}
                onChange={handleSelect}
              >
                {post.volumes.map((volume, volumeIndex) => (
                  <Select.OptGroup
                    label={`Volume ${volumeIndex + 1}: ${volume.volume}`}
                    key={`volume-${volumeIndex}`}
                  >
                    {volume.chapters.map((chapter, chapterIndex) => (
                      <Option
                        key={`${volumeIndex}-${chapterIndex}`}
                        value={`${volumeIndex + 1}:${chapterIndex + 1}`}
                        style={{ padding: 10 }}
                      >
                        {`${chapter.name}`}
                      </Option>
                    ))}
                  </Select.OptGroup>
                ))}
              </Select>
              <Button
                type="primary"
                onClick={handleNextChapter}
                disabled={isAtLastChapter}
              >
                Next Chapter
              </Button>{" "}
            </div>
            <CommentForm
              comment={comment}
              setComment={setComment}
              handleSubmit={handleSubmit}
              loading={loading}
            />
            <div style={{ marginBottom: 50 }}></div>

            <List
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={(item) => (
                <List.Item key={item._id}>
                  <List.Item.Meta
                    avatar={<Avatar>{item?.postedBy?.name?.charAt(0)}</Avatar>}
                    title={item?.postedBy?.name}
                    description={`${item.content} - ${dayjs(
                      item.createdAt
                    ).fromNow()}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { data } = await axios.get(`${process.env.API}/post/${params.slug}`);
  return {
    props: {
      post: data.post,
      postComments: data.comments,
    },
  };
}

export default SinglePost;
