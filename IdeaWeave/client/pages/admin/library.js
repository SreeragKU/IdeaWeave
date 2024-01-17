import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, List, Typography, Button, Space, Modal } from "antd";
import { AppstoreOutlined, BarsOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import { AuthContext } from "../../context/auth";
import AdminLayout from "../../components/layout/AdminLayout";

const { Meta } = Card;
const { Text } = Typography;

const breakTextIntoLines = (text, wordsPerLine) => {
  const words = text.split(" ");
  const lines = [];

  for (let i = 0; i < words.length; i += wordsPerLine) {
    const line = words.slice(i, i + wordsPerLine).join(" ");
    lines.push(line);
  }

  return lines;
};

const LibraryPage = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  const [viewMode, setViewMode] = useState("grid");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteBookId, setDeleteBookId] = useState(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const userId = auth.user._id;
        const response = await axios.get(`/get-library/${userId}`);
        setLibrary(response.data.library);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchLibrary();
  }, [auth]);

  const switchViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`/delete-from-library/${bookId}`);
      fetchLibrary();
      setDeleteModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteButtonClick = (event, bookId) => {
    event.stopPropagation();
    showDeleteModal(bookId);
  };

  const showDeleteModal = (bookId) => {
    setDeleteBookId(bookId);
    setDeleteModalVisible(true);
  };

  const hideDeleteModal = () => {
    setDeleteBookId(null);
    setDeleteModalVisible(false);
  };

  return (
    <AdminLayout>
      <div className="library-container">
        <div className="view-mode">
          <Space>
            <Button
              icon={<AppstoreOutlined />}
              onClick={() => switchViewMode("grid")}
              type={viewMode === "grid" ? "primary" : "default"}
            />
            <Button
              icon={<BarsOutlined />}
              onClick={() => switchViewMode("list")}
              type={viewMode === "list" ? "primary" : "default"}
            />
          </Space>
        </div>
        <h1>Personal Library</h1>
        {loading ? (
          <p>Loading...</p>
        ) : viewMode === "grid" ? (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
            dataSource={library}
            renderItem={(book) => (
              <List.Item>
                <Card
                  hoverable
                  className="book-card"
                  cover={
                    <img
                      alt={book.title}
                      src={book.coverImage}
                      className="book-cover"
                    />
                  }
                >
                  <Meta title={book.title} description={`By ${book.postedBy}`} />
                  <div className="book-details">
                    <Text>{`By ${book.postedBy}`}</Text>
                  </div>
                  <Button
                    type="danger"
                    icon={<DeleteOutlined />}
                    onClick={(event) => handleDeleteButtonClick(event, book._id)}
                  >
                    Remove
                  </Button>
                </Card>
              </List.Item>
            )}
          />
        ) : (
          <List
            dataSource={library}
            renderItem={(book) => (
              <List.Item>
                <Card className="book-list-card">
                  <div className="book-list-content">
                    <div className="book-list-cover-container">
                      <img
                        alt={book.title}
                        src={book.coverImage}
                        className="book-list-cover"
                      />
                    </div>
                    <div className="book-details">
                      {window.innerWidth > 767 ? (
                        <>
                          <div className="book-title">
                            {breakTextIntoLines(book.title, 4).map(
                              (line, index) => (
                                <div key={index}>{line}</div>
                              )
                            )}
                          </div>
                          <div className="book-postedBy">
                            {breakTextIntoLines(`By ${book.postedBy}`, 3).map(
                              (line, index) => (
                                <Text key={index}>{line}</Text>
                              )
                            )}
                          </div>
                          <div>
                            <Button
                              type="danger"
                              icon={<DeleteOutlined />}
                              onClick={() => showDeleteModal(book._id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div className="book-details">
                          <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            onClick={() => showDeleteModal(book._id)}
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>

      <Modal
        title="Confirm Delete"
        visible={deleteModalVisible}
        onOk={() => handleDelete(deleteBookId)}
        onCancel={hideDeleteModal}
      >
        <p>Are you sure you want to delete this book from your library?</p>
      </Modal>

      <style jsx>{`
        /* ... (previous styles) */
      `}</style>
    </AdminLayout>
  );
};

export default LibraryPage;
