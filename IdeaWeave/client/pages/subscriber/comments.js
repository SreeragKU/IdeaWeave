import { Layout } from "antd";
import SubscriberLayout from "../../components/layout/SubscriberLayout";
import UserComments from "../../components/comments/UserComments";

const { Content, Sider } = Layout;

export default function Subscriber({ children }) {
  return (
    <SubscriberLayout>
      <Content>
        <UserComments />
      </Content>
    </SubscriberLayout>
  );
}
