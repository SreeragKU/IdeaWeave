import axios from "axios";
import { Card, Row, Col, Button, Divider, Avatar, Typography } from "antd";
import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useCategory from "../../hooks/useCategory";
import useLatestPosts from "../../hooks/useLatestPosts";

dayjs.extend(relativeTime);
const { Title } = Typography;

const SingleCategory = ({ posts, category }) => {
  const { categories } = useCategory();
  const { latestPosts } = useLatestPosts();

  return (
    <>
      <Head>
        <title>{category.name}</title>
        <meta
          name="description"
          content={`Read latest posts on ${category.name}`}
        />
      </Head>

      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", marginTop: 50}}>
        <Row gutter={12}>
          <Col sm={24} lg={18} style={{ marginBottom: 12 }}>
            <h1 style={{ textAlign: "center" }}>Posts in {category.name}</h1>

            {posts.map((post) => (
              <Card key={post._id} style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                  <Avatar
                    shape="circle"
                    size={60}
                    style={{ marginRight: 15 }}
                    src={post.coverImage?.url || "/images/default.jpg"}
                    alt={post.title}
                  />

                  <div>
                    <Link href={`/post/${post.slug}`}>
                      <Title level={3}>{post.title}</Title>
                    </Link>
                    <p>
                      {dayjs(post.createdAt).format("D MMMM, YYYY h:m A")} / by{" "}
                      {post?.postedBy?.name}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </Col>

          <Col xs={24} xl={6}>
            <Divider>Categories</Divider>

            {categories.map((c) => (
              <Link href={`/category/${c.slug}`} key={c._id}>
                <Button style={{ margin: 2 }}>{c.name}</Button>
              </Link>
            ))}

            <Divider>Latest Posts</Divider>
            {latestPosts.map((p) => (
              <Link href={`/post/${p.slug}`} key={p._id}>
                <h4>{p.title}</h4>
              </Link>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { data } = await axios.get(
    `${process.env.API}/posts-by-category/${params.slug}`
  );
  return {
    props: {
      posts: data.posts,
      category: data.category,
    },
  };
}

export default SingleCategory;
