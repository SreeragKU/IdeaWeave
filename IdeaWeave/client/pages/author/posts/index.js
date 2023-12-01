import { useEffect, useContext } from "react";
import { Row, Col, Button, Grid, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { PostContext } from "../../../context/post";
import { useRouter } from "next/router";
import AuthorLayour from "../../../components/layout/AuthorLayout";
import Link from "next/link";
import PostsList from "../../../components/posts/PostsList";

const { useBreakpoint } = Grid;
const { Title, Text } = Typography;

function Posts() {
  const [post, setPost] = useContext(PostContext);
  const { posts } = post;
  const router = useRouter();
  const screens = useBreakpoint();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("/post-by-author");
      setPost((prev) => ({ ...prev, posts: data }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (post) => {
    console.log("Post", post);
    return router.push(`/author/posts/${post.slug}`);
  };

  const handleDelete = async (post) => {
    try {
      const { data } = await axios.delete(`/post/${post._id}`);
      if (data.ok) {
        setPost((prev) => ({
          ...prev,
          posts: prev.posts.filter((p) => p._id !== post._id),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthorLayour>
      <Row gutter={[16, 16]} style={{ marginTop: 60, marginLeft: 90 }}>
        <Col span={24}>
          <Button type="primary">
            <Link href="/author/posts/new">
              <PlusOutlined /> Add New
            </Link>
          </Button>
          <Title style={{ marginTop: 15 }} level={3}>
            {posts?.length} Posts
          </Title>
        </Col>
        <Col span={24}>
          <PostsList posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} />
        </Col>
      </Row>
    </AuthorLayour>
  );
}

export default Posts;
