import React, { useState, } from "react";
import axios from "axios";
import { Row, Col, Card, Typography, Button } from "antd";
import Head from "next/head";
import dynamic from "next/dynamic";
import BookFront from "./BookFront";
import BubbleNav from "../../components/nav/BookNav";

const { Title } = Typography;
const { Meta } = Card;

const ReactQuill = dynamic(() => import("react-quill"), {
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
  };

  return (
    <div>
      <ReactQuill
        value={content}
        readOnly={true}
        theme="bubble"
        modules={{ toolbar: false }}
        style={quillStyle}
      />
    </div>
  );
};

export const SinglePost = ({ post }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState("Default");
  const [postContent, setPostContent] = useState(post.content);

  const sendPostContentToBubbleNav = (content) => {
    console.log(content);
    setPostContent(content);
  };

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

  return (
    <>
      <BubbleNav
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onThemeChange={handleThemeChange}
        onTextToSpeech={handleTextToSpeech}
        postContent={postContent}
      />
      <BookFront post={post} />
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>
      <Row justify="center">
        <Col xs={24} xl={16}>
          <Card>
            <ReadOnlyQuill
              content={post.content}
              theme={selectedTheme}
              zoomLevel={zoomLevel}
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
      post: data,
    },
  };
}

export default SinglePost;
