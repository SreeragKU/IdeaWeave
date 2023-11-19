import { Layout } from "antd";
import ReaderLayout from "../../components/layout/ReaderLayout";

const { Content, Sider } = Layout;

export default function Comments({ children }) {
  return (
    <ReaderLayout>
      <Content>
        <h1>Comments Page</h1>
      </Content>
    </ReaderLayout>
  );
}
