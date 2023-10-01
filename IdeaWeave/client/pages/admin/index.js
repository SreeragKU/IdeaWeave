import { Layout } from "antd";
import AdminLayout from "../../components/layout/AdminLayout";

const { Content, Sider } = Layout;

export default function Admin({ children }) {
  return (
    <AdminLayout>
      <Content>
        <h1>Admin Page</h1>
      </Content>
    </AdminLayout>
  );
}
