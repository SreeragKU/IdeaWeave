import AuthorLayout from "../../../components/layout/AuthorLayout";
import EditPostComponent from "../../../components/layout/EditPostComponent";

function EditPost() {
  
  return (
    <AuthorLayout>
      <EditPostComponent page="author" />
    </AuthorLayout>
  );
}

export default EditPost;
