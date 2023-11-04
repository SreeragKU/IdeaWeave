import axios from "axios";
import { Row, Col, Card, Avatar } from "antd";
import Head from "next/head";
import Link from "next/link";

const { Meta } = Card;

export const Posts = ({ posts }) => {
  return (
    <>
        <Head>
            <title> Recent New Books</title>
            <meta description="Creative and Thought-Provoking: Elevate your Imagination and Awareness" />
        </Head>
        <Row gutter={12}>
        <Col sm={24} lg={16}>
            
        </Col>
        <Col>
            <p>Sidebar</p>
        </Col>
    </Row>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/posts`);
  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;