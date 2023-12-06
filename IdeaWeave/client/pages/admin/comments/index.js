import { useEffect, useState, useContext } from "react";
import { Row, Col, Button, Input, List, Modal, Spin } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import Link from "next/link";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import CommentForm from "../../../components/comments/CommentForm";
import { toast } from "react-hot-toast";

dayjs.extend(localizedFormat);

const { confirm } = Modal;

function Comments() {
  const [auth, setAuth] = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComment, setSelectedComment] = useState({});
  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(false);
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
      const { data } = await axios.get(`/all-comments/${page}`);
      setComments([...comments, ...data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
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

  const handleHide = async (comment) => {
    confirm({
      title: "Are you sure you want to hide this comment?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      async onOk() {
        try {
          const { data } = await axios.put(`/hide-comment/${comment._id}`);
          if (data?.success) {
            setComments(comments.filter((c) => c._id !== comment._id));
            setTotal(total - 1);
            toast.success("Comment hidden successfully");
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/comment/${selectedComment._id}`, {
        content,
      });

      let arr = comments;
      const index = arr.findIndex((c) => c._id === selectedComment._id);
      arr[index].content = data.content;
      setComments(arr);

      setVisible(false);
      setLoading(false);
      setSelectedComment({});

      toast.success("Comment updated");
    } catch (err) {
      console.log(err);
      setVisible(false);
    }
  };

  const filteredComments = comments?.filter(
    (comment) =>
      comment?.content.toLowerCase().includes(keyword) ||
      comment?.postedBy?.name.toLowerCase().includes(keyword) ||
      (comment?.postedBy?.role &&
        comment.postedBy.role.toLowerCase().includes(keyword))
  );

  return (
    <AdminLayout>
      {loading ? (
        <Spin size="large" style={{ marginLeft: 120, marginTop: 80 }} />
      ) : (
        <Row style={{ paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
          <Col xs={24} sm={24} lg={16} offset={1}>
            <h1 style={{ marginTop: 15 }}>{total} Comments</h1>
            <Input
              placeholder="Search"
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.toLowerCase())}
            />
            {filteredComments.map((item) => (
              <List.Item
                key={item._id}
                style={{ opacity: item.isHidden ? 0.5 : 1 }} // Apply different opacity for hidden comments
                actions={[
                  <Link href={`/post/${item?.postId?.slug}#${item._id}`}>
                    view
                  </Link>,
                  auth.user && item.postedBy.name === auth.user.name && (
                    <a
                      onClick={() => {
                        setSelectedComment(item);
                        setVisible(true);
                        setContent(item.content);
                      }}
                    >
                      edit
                    </a>
                  ),
                  auth.user && <a onClick={() => handleHide(item)}>hide</a>,
                ]}
              >
                <List.Item.Meta
                  description={`On ${item?.postId?.title} | ${
                    item?.postedBy?.name
                  } | ${dayjs(item.createdAt).format("L LT")}`}
                  title={item.content}
                />
              </List.Item>
            ))}
          </Col>
        </Row>
      )}

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
      <Row>
        <Col span={24}>
          <Modal
            visible={visible}
            title="Update comment"
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
          >
            <CommentForm
              handleSubmit={handleSubmit}
              comment={content}
              setComment={setContent}
              loading={loading}
            />
          </Modal>
        </Col>
      </Row>
    </AdminLayout>
  );
}

export default Comments;
