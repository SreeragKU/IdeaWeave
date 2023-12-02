import { useEffect, useState, useContext } from "react";
import { Row, Col, Button, Input, List, Modal } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import Link from "next/link";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const { confirm } = Modal;

function Comments() {
  const [auth, setAuth] = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (auth?.token) {
      fetchComments();
      getTotal();
    }
  }, [auth?.token]);

  useEffect(() => {
    if (page === 1) return;
    if (auth?.token) fetchComments();
  }, [page]);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/comments/${page}`);
      setComments([...comments, ...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/comment-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (comment) => {
    confirm({
      title: "Are you sure you want to delete this comment?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      async onOk() {
        try {
          const { data } = await axios.delete(`/comment/${comment._id}`);
          if (data?.ok) {
            setComments(comments.filter((c) => c._id !== comment._id));
            setTotal(total - 1);
            toast.success("Comment deleted successfully");
          }
        } catch (error) {
          console.log(error);
        }
      },
      onCancel() {
        return;
      },
    });
  };  

  const filteredComments = comments?.filter((comment) =>
    comment.content.toLowerCase().includes(keyword)
  );

  return (
    <AdminLayout>
      <Row style={{ paddingLeft: 80, marginTop: 40, paddingRight: 50}}>
        <Col xs={24} sm={24} lg={16} offset={1}>
          <h1 style={{ marginTop: 15 }}>{total} Comments</h1>

          <Input
            placeholder="Search"
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          />

          <List
            itemLayout="horizontal"
            dataSource={filteredComments}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link href={`/post/${item?.postId?.slug}#${item._id}`}>
                    view
                  </Link>,
                  <a onClick={() => handleDelete(item)}>delete</a>,
                ]}
              >
                <List.Item.Meta
                  description={`On ${item?.postId?.title} | ${
                    item?.postedBy?.name
                  } | ${dayjs(item.createdAt).format("L LT")}`}
                  title={item.content}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>

      {page * 6 < total && (
        <Row>
          <Col span={24} style={{ marginLeft: "430px", marginTop: "24px" }}>
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
    </AdminLayout>
  );
}

export default Comments;
