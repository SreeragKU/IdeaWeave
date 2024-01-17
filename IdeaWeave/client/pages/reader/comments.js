import { Layout } from "antd";
import ReaderLayout from "../../components/layout/ReaderLayout";
import UserComments from "../../components/comments/UserComments";

const { Content, Sider } = Layout;

export default function Reader({ children }) {
  return (
    <ReaderLayout>
      <Content>
        <UserComments />
      </Content>
    </ReaderLayout>
  );
}
