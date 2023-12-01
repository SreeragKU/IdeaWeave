import React from "react";
import htmlToMd from "html-to-md";
import dayjs from "dayjs";
import { Card, Col, Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text, Title } = Typography;

const PostsList = ({ posts, handleDelete, handleEdit }) => {
  const sanitizeHtml = (html) => {
    return html.replace(/<\/?(u|b|i)>/g, "");
  };

  const renderChapters = (chapters) => {
    const maxContentLength = 100; 

    if (chapters.length > 0) {
      const firstChapter = chapters[0];
      return (
        <div key={firstChapter.name}>
          <Text ellipsis>
            {htmlToMd(sanitizeHtml(firstChapter.content)).substring(0, maxContentLength)}...
          </Text>
        </div>
      );
    }

    return null;
  };

  const renderVolumes = (volumes) => {
    return volumes.map((volume) => (
      <div key={volume.volume}>
        <Text strong>{volume.volume}</Text>
        <Text type="secondary">
          &nbsp;({volume.chapters.length} chapters)
        </Text>
        {renderChapters(volume.chapters)}
      </div>
    ));
  };

  return (
    <>
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
              </Space>,
            ]}
          >
            <img
              alt={post.title}
              src={post.coverImage?.url}
              style={{ width: "100%", height: "150px" }}
            />
            <Title level={5}>{post.title}</Title>
            <div>
              <Text strong>Total Volumes:</Text>
              <Text>{post.volumes.length}</Text>
              <br />
              <Text strong>Total Chapters:</Text>
              <Text>{post.volumes.reduce((sum, volume) => sum + volume.chapters.length, 0)}</Text>
            </div>
            {renderVolumes(post.volumes)}
            <div style={{ marginTop: "16px" }}>
              <u>Posted On</u>:{" "}
              <i>{dayjs(post.createdAt).format("D MMMM, YYYY h:mm A")}</i>
              <br />
              <u>Posted By</u>: {post.postedBy.name}
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default PostsList;