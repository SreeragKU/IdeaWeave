import axios from "axios";
import { Row, Col, Card, Avatar } from "antd";
import Head from "next/head";
import Link from "next/link";

const { Meta } = Card;

export const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Recent New Releases</title>
        <meta description="Exciting new Books to invigorate your creative mind." />
      </Head>
      <Row gutter={12}>
        {posts.map((post) => (
          <Col xs={12} sm={12} md={8} lg={6} xl={4} style={{ marginLeft: 25, marginTop: 25, marginBottom: 25}}>
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
                <Meta title={post.title} />
              </Card>
            </Link>
          </Col>
        ))}
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
