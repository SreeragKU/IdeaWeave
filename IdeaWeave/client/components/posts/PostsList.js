import htmlToMd from "html-to-md";
import dayjs from "dayjs";
import { Card, Col, Space, Popconfirm } from "antd"; 
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; 
import { Typography } from "antd"; 

const { Text, Title } = Typography; 



const PostsList = ({ posts, handleDelete, handleEdit }) => {
  
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
            <div style={{ marginTop: "16px" }}>
              <u>Posted On</u> :{" "}
              <i>{dayjs(post.createdAt).format("D MMMM, YYYY h:mm A")}</i>
              <br />
              <u>Posted By</u> : {post.postedBy.name}
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default PostsList;
