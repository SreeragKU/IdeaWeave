import { Layout } from "antd";
import SubscriberLayout from "../../components/layout/SubscriberLayout";

const { Content, Sider } = Layout;

export default function Profile({ children }) {
  return (
    <SubscriberLayout>
      <Content>
        <h1>Profile Page</h1>
      </Content>
    </SubscriberLayout>
  );
}
