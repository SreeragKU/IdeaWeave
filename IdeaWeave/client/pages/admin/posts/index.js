import { useEffect, useContext } from "react";
import { Row, Col, Button, Card, Space, Grid, Typography, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { PostContext } from "../../../context/post";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/layout/AdminLayout";
import Link from "next/link";
import htmlToMd from "html-to-md";

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
      const { data } = await axios.get("/posts");
      setPost((prev) => ({ ...prev, posts: data }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (post) => {
    return router.push(`/admin/posts/${post.slug}`);
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
    <AdminLayout>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Button type="primary">
            <Link href="/admin/posts/new">
              <PlusOutlined /> Add New
            </Link>
          </Button>
          <Title style={{ marginTop: 15 }} level={3}>
            {posts?.length} Posts
          </Title>
        </Col>
        {posts.map((post) => (
          <Col key={post._id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              actions={[
                <Space>
                  <EditOutlined onClick={() => handleEdit(post)} />
                  <Popconfirm
                    title="Are you sure you want to delete?"
                    onConfirm={() => handleDelete(post)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </Space>
              ]}
            >
              <img
                alt={post.title}
                src={post.coverImage?.url}
                style={{ width: "100%", height: "150px" }}
              />
              <Title level={5}>{post.title}</Title>
              <Text ellipsis>{htmlToMd(post.content)}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </AdminLayout>
  );
}

export default Posts;
