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

  const loadUsers = async () => {
    try {
      const { data } = await axios.get("/users");
      // Filter out the current user from the list
      const filteredUsers = data.filter(user => user._id !== auth.user._id);
      setUsers(filteredUsers);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggleUserStatus = async (user) => {
    if (user.isUpdating) {
      return; // Do nothing if the user is already being updated
    }

    try {
      if (user._id === auth.user._id) {
        toast.error("You cannot toggle your own status");
        return;
      }

      // Set the updating state for the user
      setUsers((prev) =>
        prev.map((u) =>
          u._id === user._id ? { ...u, isUpdating: true } : u
        )
      );

      try {
        const { data } = await axios.put(`/users/${user._id}/toggle`);
        // Update the user's status in the UI
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id ? { ...u, isActive: data.isActive, isUpdating: false } : u
          )
        );

        toast.success(
          `User ${data.isActive ? "enabled" : "disabled"} successfully`
        );
      } catch (error) {
        console.log(error);
        // Clear the updating state if there's an error
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id ? { ...u, isUpdating: false } : u
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <Row style={{ paddingLeft: "100px", paddingTop: "60px" }}>
        <Col span={24}>
          <h4>All Users ({users?.length})</h4>

          <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => (
              <List.Item
                className={user.isActive ? "active-user" : "disabled-user"}
                actions={[
                  <a
                    onClick={() => handleToggleUserStatus(user)}
                    disabled={user.isUpdating}
                  >
                    {user.isUpdating ? "Updating..." : user.isActive ? "Disable" : "Enable"}
                  </a>,
                ]}
              >
                <Avatar src={user?.image?.url}>{user?.name[0]}</Avatar>
                <List.Item.Meta title={user.name} style={{ marginLeft: 10 }} />
                <List.Item.Meta description={user.email} style={{ marginLeft: 10 }} />
                <List.Item.Meta description={user.role} style={{ marginLeft: 10 }} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </AdminLayout>
  );
}
