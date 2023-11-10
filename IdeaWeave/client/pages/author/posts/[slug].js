import AuthorLayout from "../../../components/layout/AuthorLayout";
import EditPostComponent from "../../../components/layout/EditPostComponent";

function EditPost() {
  const user = "/author";
  
  return (
    <AuthorLayout>
      <EditPostComponent user={user} />
    </AuthorLayout>
  );
}

export default EditPost;
