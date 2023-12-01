import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Input, Button } from "antd";

const { TextArea } = Input;

const CommentForm = ({ comment, setComment, handleSubmit, loading }) => {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <br />
      <TextArea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment...(Max: 2000)"
        rows="4"
        disabled={auth?.user === null && auth?.token === ""}
        maxLength={2000}
      />
      <Button
        style={{ marginTop: 5 }}
        loading={loading}
        type="primary"
        disabled={comment === "" || auth?.user === null && auth?.token === ""}
        onClick={handleSubmit}
      >
        Post
      </Button>
    </>
  );
};

export default CommentForm;
