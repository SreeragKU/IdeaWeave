import { Layout } from "antd";
import AuthorLayout from "../../components/layout/AuthorLayout";
import UserComments from "../../components/comments/UserComments";

const { Content, Sider } = Layout;

export default function Author({ children }) {
  return (
    <AuthorLayout>
      <Content>
        <UserComments />
      </Content>
    </AuthorLayout>
  );
}
