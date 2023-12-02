import { useState, useEffect, useContext } from "react";
import {
  Row,
  Col,
  Card,
  List,
  Avatar,
  Button,
  Spin,
  Pagination,
  Tag,
  Typography,
  Badge,
  Input,
  Select,
} from "antd";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth";
import axios from "axios";
import AdminLayout from "../../../components/layout/AdminLayout";
import { ThemeContext } from "../../../context/theme";

const { Search } = Input;
const { Option } = Select;

export default function AllUsers() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme] = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  const [filter, setFilter] = useState({
    searchTerm: "",
    role: "",
    isActive: null,
  });
  const [sort, setSort] = useState({
    field: "name",
    order: "asc",
  });

  useEffect(() => {
    if (auth?.token) {
      loadUsers();
    }
  }, [auth?.token, filter, sort]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/users");
      setUsers(applyFiltersAndSort(data, filter, sort));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = (users, filter, sort) => {
    let filteredUsers = users;

    if (filter.searchTerm) {
      const searchTermLower = filter.searchTerm.toLowerCase();
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.email.toLowerCase().includes(searchTermLower) ||
          user.name.toLowerCase().includes(searchTermLower) ||
          user.role.toLowerCase().includes(searchTermLower)
      );
    }

    if (filter.role) {
      filteredUsers = filteredUsers.filter((user) => user.role === filter.role);
    }

    if (filter.isActive !== null) {
      filteredUsers = filteredUsers.filter(
        (user) => user.isActive === filter.isActive
      );
    }

    const field = sort.field;
    const order = sort.order === "asc" ? 1 : -1;
    filteredUsers.sort((a, b) => {
      if (a[field] < b[field]) return -1 * order;
      if (a[field] > b[field]) return 1 * order;
      return 0;
    });

    return filteredUsers;
  };

  const handleToggleUserStatus = async (user) => {
    if (user.isUpdating) {
      return;
    }

    try {
      if (user._id === auth.user._id) {
        toast.error("You cannot toggle your own status");
        return;
      }

      setUsers((prev) =>
        prev.map((u) => (u._id === user._id ? { ...u, isUpdating: true } : u))
      );

      try {
        const { data } = await axios.put(`/users/${user._id}/toggle`);
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id
              ? { ...u, isActive: data.isActive, isUpdating: false }
              : u
          )
        );

        toast.success(
          `User ${data.isActive ? "enabled" : "disabled"} successfully`
        );
      } catch (error) {
        console.error(error);
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id ? { ...u, isUpdating: false } : u
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditUser = (userId) => {
    router.push(`/admin/users/${userId}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setCurrentWindowWidth(window.innerWidth);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const renderUserCard = (role, usersInRole) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const usersToDisplay = usersInRole.slice(startIndex, endIndex);

    return (
      <Card
        title={role}
        style={{
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: theme === "dark" ? "#333" : "#f0f2f5",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={usersToDisplay}
          renderItem={(user) => (
            <List.Item
              className={user.isActive ? "active-user" : "disabled-user"}
              style={{
                border: `1px solid ${theme === "dark" ? "#444" : "#ddd"}`,
                borderRadius: 8,
                marginBottom: 12,
                padding: 16,
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={user?.image?.url}
                    style={{ backgroundColor: "#87d068" }}
                  >
                    {user?.name[0]}
                  </Avatar>
                }
                title={
                  <div>
                    {user.name}{" "}
                    <Tag color={user.isActive ? "green" : "red"}>
                      {user.isActive ? "Active" : "Disabled"}
                    </Tag>
                  </div>
                }
                description={
                  <div style={{ maxWidth: "80%" }}>
                    {currentWindowWidth > 576
                      ? user.email
                      : user.email.replace(
                          /^(.{2})(.*)(?=@)/,
                          (_, firstTwoChars, remainingChars) =>
                            `${firstTwoChars}...`
                        )}

                    {(user.role === "Admin" || user.role === "Author") && (
                      <div className="posts-info">
                        <Typography.Text strong>Posts:</Typography.Text>{" "}
                        {user?.posts?.length !== undefined ? (
                          <span className="post-count">
                            <Badge
                              count={user?.posts?.length}
                              overflowCount={999}
                              style={{
                                backgroundColor: "#328f68",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "10px",
                              }}
                            />
                          </span>
                        ) : (
                          "N/A"
                        )}
                      </div>
                    )}
                  </div>
                }
              />
              <div className="user-info">
                <div className="button-group">
                  {!user.isUpdating && user.role !== "Admin" && (
                    <Button
                      type={user.isActive ? "danger" : "success"}
                      onClick={() => handleToggleUserStatus(user)}
                    >
                      {user.isActive ? "Disable" : "Enable"}
                    </Button>
                  )}
                  <Button
                    key="editUser"
                    onClick={() => handleEditUser(user._id)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </List.Item>
          )}
        />
        {usersInRole.length > pageSize && (
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={usersInRole.length}
            onChange={(page) => setCurrentPage(page)}
            style={{ marginTop: 16, textAlign: "center" }}
          />
        )}
      </Card>
    );
  };

  return (
    <AdminLayout>
      <Row
        style={{
          padding: 20,
          marginLeft: 90,
          marginRight: 10,
          marginTop: 60,
          backgroundColor: theme === "dark" ? "#222" : "transparent",
        }}
      >
        <Col span={24}>
          <h2
            style={{
              marginBottom: 20,
              fontSize: 24,
              color: theme === "dark" ? "white" : "black",
            }}
          >
            All Users ({users?.length})
          </h2>

          <div style={{ marginBottom: 20 }}>
            <Search
              placeholder="Search by name, email, or role"
              value={filter.searchTerm}
              onChange={(e) =>
                setFilter({ ...filter, searchTerm: e.target.value })
              }
              style={{ width: 300, marginRight: 10 }}
            />

            <Select
              placeholder="Filter by role"
              value={filter.role}
              onChange={(value) => setFilter({ ...filter, role: value })}
              style={{ width: 150, marginRight: 10 }}
            >
              <Option value="">All Roles</Option>
              <Option value="Admin">Admin</Option>
              <Option value="Author">Author</Option>
              <Option value="Subscriber">Subscriber</Option>
              <Option value="Reviewer">Reviewer</Option>
              <Option value="Reader">Reader</Option>
            </Select>

            <Select
              placeholder="Filter by status"
              value={filter.isActive === null ? "" : filter.isActive.toString()}
              onChange={(value) => {
                setFilter({
                  ...filter,
                  isActive:
                    value === "" ? null : value === "true" ? true : false,
                });
              }}
              style={{ width: 150, marginRight: 10 }}
            >
              <Option value="">All Status</Option>
              <Option value="true">Active</Option>
              <Option value="false">Disabled</Option>
            </Select>

            <Select
              placeholder="Sort by"
              value={sort.field}
              onChange={(value) => setSort({ ...sort, field: value })}
              style={{ width: 150, marginRight: 10 }}
            >
              <Option value="name">Name</Option>
              <Option value="email">Email</Option>
            </Select>

            <Select
              placeholder="Order"
              value={sort.order}
              onChange={(value) => setSort({ ...sort, order: value })}
              style={{ width: 100, marginRight: 10 }}
            >
              <Option value="asc">Ascending</Option>
              <Option value="desc">Descending</Option>
            </Select>
          </div>

          {loading ? (
            <Spin tip="Loading..." />
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {renderUserCard(
                "Admin",
                users.filter((user) => user.role === "Admin")
              )}
              {renderUserCard(
                "Author",
                users.filter((user) => user.role === "Author")
              )}
              {renderUserCard(
                "Subscriber",
                users.filter((user) => user.role === "Subscriber")
              )}
              {renderUserCard(
                "Reviewer",
                users.filter((user) => user.role === "Reviewer")
              )}
              {renderUserCard(
                "Reader",
                users.filter((user) => user.role === "Reader")
              )}
            </div>
          )}
        </Col>
      </Row>

      <style jsx>{`
        .user-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 10px;
        }

        .posts-info {
          margin-top: 8px;
        }

        .button-group {
          margin-top: 8px;
          display: flex;
          justify-content: center;
        }
        .post-count {
          display: flex;
          align-items: center;
          font-weight: bold;
          margin-left: 8px;
        }
      `}</style>
    </AdminLayout>
  );
}
