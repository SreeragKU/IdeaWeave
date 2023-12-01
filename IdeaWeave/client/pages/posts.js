import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Avatar, Button } from "antd";
import Head from "next/head";
import Link from "next/link";

const { Meta } = Card;

export const Posts = ({ posts }) => {
  const [allPosts, setAllPosts] = useState(posts);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/post-count");
      console.log("total", data);
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/posts/${page}`);
      setAllPosts([...allPosts, ...data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Recent New Releases</title>
        <meta description="Exciting new Books to invigorate your creative mind." />
      </Head>
      <Row gutter={12} style={{ marginTop: 50 }}>
        {allPosts.map((post) => {
          const maxCharsPerLine = 25;
          const lines = [];
          let currentLine = '';
          const words = post.title.split(' ');

          words.forEach((word) => {
            if ((currentLine + word).length <= maxCharsPerLine) {
              currentLine += (currentLine === '' ? '' : ' ') + word;
            } else {
              lines.push(currentLine);
              currentLine = word;
            }
          });

          if (currentLine !== '') {
            lines.push(currentLine);
          }

          return (
            <Col xs={12} sm={12} md={8} lg={6} xl={4} style={{ marginLeft: 25, marginTop: 25, marginBottom: 25 }} key={post.slug}>
              <Link href={`/post/${post.slug}`}>
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={
                    <Avatar
                      shape="square"
                      style={{ height: "200px" }}
                      src={post.coverImage?.url || "images/default.jpeg"}
                      alt={post.title}
                    />
                  }
                >
                  <Meta title={<div>{lines.map((line, index) => <div key={index}>{line}</div>)}</div>} />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
      {allPosts?.length < total && (
        <Row>
          <Col span={24} style={{ textAlign: "center", padding: 20 }}>
            <Button
              size="large"
              type="primary"
              loading={loading}
              onClick={() => setPage(page + 1)}
            >
              Load More
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/posts/1`);
  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;
