import { Layout } from "antd";
import ReaderLayout from "../../components/layout/ReaderLayout";

const { Content, Sider } = Layout;

export default function Profile({ children }) {
  return (
    <ReaderLayout>
      <Content>
        <h1>Profile Page</h1>
      </Content>
    </ReaderLayout>
  );
}
