import { Layout } from "antd";
import ReaderLayout from "../../components/layout/ReaderLayout";

const { Content, Sider } = Layout;

export default function Reader({ children }) {
  return (
    <ReaderLayout>
      <Content>
        <h1>Reader Page</h1>
      </Content>
    </ReaderLayout>
  );
}
