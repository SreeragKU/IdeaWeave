import React, { useState } from "react";
import htmlToMd from "html-to-md";
import dayjs from "dayjs";
import {
  Card,
  Col,
  Space,
  Popconfirm,
  Input,
  Select,
  Row,
  Checkbox,
  Button,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";

const { Text, Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const DraftsList = ({ posts, handleDelete, handleEdit, handleCardClick, selectedPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const sanitizeHtml = (html) => {
    return html.replace(/<\/?(u|b|i)>/g, "");
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const filteredAndSortedPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf()
        : dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
    );

  const renderChapters = (chapters) => {
    const maxContentLength = 100;

    if (chapters.length > 0) {
      const firstChapter = chapters[0];
      return (
        <div key={firstChapter.name}>
          <Text ellipsis>
            {htmlToMd(sanitizeHtml(firstChapter.content)).substring(
              0,
              maxContentLength
            )}
            ...
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
      <Row justify="space-between" style={{ marginBottom: 16, paddingRight: 16 }}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Search
            placeholder="Search by title"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
            style={{ width: "100%" }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Select
            defaultValue="asc"
            onChange={handleSortChange}
            style={{ width: "100%" }}
          >
            <Option value="asc">Ascending</Option>
            <Option value="desc">Descending</Option>
          </Select>
        </Col>
      </Row>

      {/* Search results */}
      <Row gutter={[16, 16]}>
        {filteredAndSortedPosts.map((post) => (
          <Col key={post._id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              actions={[
                <Space>
                  <Checkbox
                    onChange={() => handleCardClick(post._id)}
                    checked={selectedPosts.includes(post._id)}
                  />
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
                <Text>
                  {post.volumes.reduce(
                    (sum, volume) => sum + volume.chapters.length,
                    0
                  )}
                </Text>
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
      </Row>
    </>
  );
};

export default DraftsList;
