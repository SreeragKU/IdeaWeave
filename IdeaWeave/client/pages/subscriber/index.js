import { Layout } from "antd";
import SubscriberLayout from "../../components/layout/SubscriberLayout";

const { Content, Sider } = Layout;

export default function Subscriber({ children }) {
  return (
    <SubscriberLayout>
      <Content>
        <h1>Subscriber Page</h1>
      </Content>
    </SubscriberLayout>
  );
}
