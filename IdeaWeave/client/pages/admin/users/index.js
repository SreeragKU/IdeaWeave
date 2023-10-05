import { useState, useEffect, useContext } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Row, Col, List, Avatar } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth";
import Link from "next/link";

export default function AllUsers() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (auth?.token) loadUsers();
  }, [auth?.token]);

  const loadUsers = async (req, res) => {
    try {
      const { data } = await axios.get("users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (user) => {
    try {
      if (user._id === auth.user._id) {
        toast.error("you can not delete yourself");
        return;
      }
      try {
        const {data} = await axios.delete(`/user/${user._id}`);
        setUsers(prev => prev.filter((u) => u._id !== user._id));
        toast.success('User deleted');
      } catch (error) {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <Row>
        <Col span={24}>
          <h4>All Users ({users?.length})</h4>

          <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => (
              <List.Item
                actions={[
                  // <Link href={`/admin/users/${user._id}`}>
                  //   <span>edit</span>
                  // </Link>,
                  <a disabled={user?._id === auth?.user?._id}
                    onClick={() => handleDelete(user)}
                  >delete</a>,
                ]}
              >
                <Avatar src={user?.image?.url}>{user?.name[0]}</Avatar>
                <List.Item.Meta title={user.name} style={{ marginLeft: 10 }} />
                <List.Item.Meta
                  description={user.email}
                  style={{ marginLeft: 10 }}
                />
                <List.Item.Meta
                  description={user.role}
                  style={{ marginLeft: 10 }}
                />
                {/* <List.Item.Meta
                  description={`${user?.posts?.length || 0} post`}
                  style={{ marginLeft: 10 }}
                /> */}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </AdminLayout>
  );
}
