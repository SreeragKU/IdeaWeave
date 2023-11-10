import AdminLayout from "../../../components/layout/AdminLayout"
import EditPostComponent from "../../../components/layout/EditPostComponent";

function EditPost() {
  const user = "/admin";

  return (
   <AdminLayout>
       <EditPostComponent user={user}/>
   </AdminLayout>
 );
}

export default EditPost;



