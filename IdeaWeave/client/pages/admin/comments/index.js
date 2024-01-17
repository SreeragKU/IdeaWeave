import { useEffect, useState, useContext } from "react";
import { Row, Col, Button, Input, List, Modal, Spin, Card } from "antd";
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
  const [selectedPost, setSelectedPost] = useState(null);
  const router = useRouter();
  const [commentFormVisible, setCommentFormVisible] = useState(false);

  useEffect(() => {
    if (auth?.token) {
      fetchComments();
      getTotal();
    }
  }, [auth?.token]);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/all-comments`);
      setComments([...comments, ...data]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleEdit = (comment) => {
    setSelectedComment(comment);
    setContent(comment.content);
    setCommentFormVisible(true);
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/comment-count");
      setTotal(data);
    } catch (err) {
      console.error(err);
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
          console.error(error);
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

      setComments((prevComments) =>
        prevComments.map((c) =>
          c._id === selectedComment._id ? { ...c, content: data.content } : c
        )
      );

      setVisible(false);
      setLoading(false);
      setSelectedComment({});
      setContent(""); 

      toast.success("Comment updated");
    } catch (err) {
      console.error(err);
      setVisible(false);
    }
  };

  const filteredComments = comments?.filter((comment) => {
    const keywordsArray = keyword.toLowerCase().split(" ");

    return keywordsArray.every((kw) =>
      [
        comment?.content,
        comment?.postedBy?.name,
        comment?.postedBy?.role,
        comment?.postId?.title,
      ].some((field) => field && field.toLowerCase().includes(kw))
    );
  });

  const [modalKeyword, setModalKeyword] = useState("");

  const handlePostClick = (postTitle) => {
    const postComments = comments.filter(
      (comment) => comment?.postId?.title === postTitle
    );
    setSelectedPost({ title: postTitle, comments: postComments });
    setVisible(true);
  };

  const uniquePostTitles = [
    ...new Set(filteredComments.map((item) => item?.postId?.title)),
  ];

  return (
    <AdminLayout>
      {loading ? (
        <Spin size="large" style={{ marginLeft: 120, marginTop: 80 }} />
      ) : (
        <Row style={{ paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
          <Col xs={24} sm={24} lg={16} offset={1}>
            <h1 style={{ marginTop: 15 }}>{total} Comments</h1>
            {uniquePostTitles.map((postTitle) => (
              <Card
                key={postTitle}
                title={postTitle}
                onClick={() => handlePostClick(postTitle)}
                style={{ marginBottom: 16, cursor: "pointer" }}
              />
            ))}
          </Col>
        </Row>
      )}
      <Row>
        <Col span={24}>
          <Modal
            visible={visible}
            title={`Comments for ${selectedPost?.title}`}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
          >
            <Input
              placeholder="Search comments"
              type="search"
              value={modalKeyword}
              onChange={(e) => setModalKeyword(e.target.value.toLowerCase())}
              style={{ marginBottom: 16 }}
            />
            {selectedPost?.comments
              .filter((comment) =>
                comment.content.toLowerCase().includes(modalKeyword)
              )
              .map((comment) => (
                <div key={comment._id}>
                  <p>{comment.content}</p>
                  <p>{`${comment?.postedBy?.name} | ${dayjs(
                    comment.createdAt
                  ).format("L LT")}`}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link
                      href={`/post/${comment?.postId?.slug}#${comment._id}`}
                    >
                      View
                    </Link>
                    {auth.user && comment.postedBy.name === auth.user.name && (
                      <>
                        <a
                          onClick={() => {
                            handleEdit(comment);
                            setCommentFormVisible(true);
                          }}
                        >
                          Edit
                        </a>
                      </>
                    )}
                    <a onClick={() => handleHide(comment)}>Hide</a>
                  </div>
                  <hr />
                </div>
              ))}
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Modal
            visible={commentFormVisible}
            title="Update comment"
            onOk={() => setCommentFormVisible(false)}
            onCancel={() => setCommentFormVisible(false)}
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
