import { useEffect, useContext, useState } from "react";
import { Row, Col, Button, Grid, Typography, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { PostContext } from "../../../context/post";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/layout/AdminLayout";
import Link from "next/link";
import PostsList from "../../../components/posts/PostsList";
import { AuthContext } from "../../../context/auth";

const { useBreakpoint } = Grid;
const { Title, Text } = Typography;

function Posts() {
  const [post, setPost] = useContext(PostContext);
  const [auth, setAuth] = useContext(AuthContext);
  const { posts } = post;
  const router = useRouter();
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.token) fetchPosts();
  }, [auth?.token]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/draft-by-author");
      setPost((prev) => ({ ...prev, posts: data }));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (post) => {
    return router.push(`/admin/drafts/${post.slug}`);
  };

  const handleDelete = async (post) => {
    try {
      const { data } = await axios.delete(`/draft/${post._id}`);
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
    <AdminLayout>
      <Row gutter={[16, 16]} style={{ paddingLeft: 120, marginTop: 60, paddingRight: 50 }}>
        <Col span={24}>
          <Title style={{ marginTop: 15 }} level={3}>
            {loading ? <Spin /> : `${posts?.length} Drafts`}
          </Title>
        </Col>
        <Col span={24}>
          <PostsList posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} />
        </Col>
      </Row>
    </AdminLayout>
  );
}

export default Posts;
