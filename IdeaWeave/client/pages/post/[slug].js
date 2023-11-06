import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Typography } from "antd";
import Head from "next/head";
import dynamic from "next/dynamic";
import BookFront from "./BookFront";
import BookTopNav from "../../components/nav/BookTopNav";
import BookSideBar from "../../components/nav/BookSideBar";

const { Title } = Typography;
const { Meta } = Card;

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const ReadOnlyQuill = ({ content }) => {
  const quillStyle = {
    height: "auto",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  };

  useEffect(() => {
    const quillElement = document.querySelector(".ql-editor"); 
    if (quillElement) {
      Object.assign(quillElement.style, quillStyle);
    }
  }, []);

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
  return (
    <>
      <BookFront post={post} />
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>
      <Row justify="center">
        <Col xs={24} xl={16}>
          <Card>
            <ReadOnlyQuill content={post.content} />
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
