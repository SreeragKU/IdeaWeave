import { Layout } from "antd";
import AuthorLayout from "../../components/layout/AuthorLayout";

const { Content, Sider } = Layout;

export default function Author({ children }) {
  return (
    <AuthorLayout>
      <Content>
        <h1>Author Page</h1>
      </Content>
    </AuthorLayout>
  );
}
