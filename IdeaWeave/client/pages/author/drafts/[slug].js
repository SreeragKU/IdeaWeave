import AdminLayout from "../../../components/layout/AdminLayout"
import EditDraftComponent from "../../../components/posts/EditDraftComponent";

function EditPost() {
  const user = "/author";

  return (
   <AdminLayout>
       <EditDraftComponent user={user}/>
   </AdminLayout>
 );
}

export default EditPost;



