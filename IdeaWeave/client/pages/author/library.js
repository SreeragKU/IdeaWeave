import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, List, Typography, Button, Space, Modal } from "antd";
import {
  AppstoreOutlined,
  BarsOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { AuthContext } from "../../context/auth";
import AuthorLayout from "../../components/layout/AuthorLayout";

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
  const [viewMode, setViewMode] = useState("grid"); // Default view mode is grid
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
      // Refresh library after deletion
      fetchLibrary();
      setDeleteModalVisible(false);
    } catch (error) {
      console.error(error);
    }
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
    <AuthorLayout>
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
                <Link href={`/post/${book.slug}`}>
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
                    <Meta
                      title={book.title}
                      description={`By ${book.postedBy}`}
                    />
                    <div className="book-details">
                      <Text>{`By ${book.postedBy}`}</Text>
                    </div>
                    <Button
                      type="danger"
                      icon={<DeleteOutlined />}
                      onClick={() => showDeleteModal(book._id)}
                    >
                      Remove
                    </Button>
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        ) : (
          // List view
          <List
            dataSource={library}
            renderItem={(book) => (
              <List.Item>
                <Link href={`/post/${book.slug}`}>
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
                        {/* Conditionally render based on screen size */}
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
                          // Small screen size (iPhone SE)
                          <div className="book-details">
                            <Button
                              type="danger"
                              icon={<DeleteOutlined />}
                              onClick={() => showDeleteModal(book._id)}
                            >
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
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
        .library-container {
          margin: 70px 110px;
        }

        .view-mode {
          margin-bottom: 10px;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .book-card {
          width: 100%;
          height: 100%;
        }

        .book-cover {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .book-list-card {
          width: 100%;
          height: 100%;
          display: flex;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          overflow: hidden;
          transition: box-shadow 0.3s;
          cursor: pointer;

          &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        }

        .book-list-content {
          display: flex;
          width: 100%;
        }

        .book-title,
        .book-postedBy {
          word-break: break-word;
        }

        .book-list-card {
          width: 100%;
          height: 100%;
          display: flex;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          overflow: hidden;
          transition: box-shadow 0.3s;
          cursor: pointer;

          &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        }

        .book-list-cover-container {
          flex: 0 0 120px;
          width: 120px;
          height: 120px;
          overflow: hidden;
        }

        .book-list-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .book-details {
          flex: 1;
          padding: 16px;
        }

        @media only screen and (max-width: 767px) {
          .library-container {
            margin: 20px;
          }

          .view-mode {
            margin-bottom: 10px;
            margin-top: 60px; 
          }

          .book-details {
            padding: 16px;
            text-align: center;
          }

          .book-title div,
          .book-postedBy span {
            font-size: 14px;
          }

          .book-list-card {
            flex-direction: column;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;

            &:hover {
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
              transform: translateY(-2px);
            }
          }

          .book-list-cover-container {
            width: 100%;
            height: auto;
          }

          .book-list-cover {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .book-details {
            flex: 1;
            padding: 16px;
          }

          .book-title,
          .book-postedBy {
            word-break: break-word;
          }

          .book-details {
            display: flex;
            flex-direction: column; /* Stack elements vertically for smaller screens */
            align-items: center; /* Center elements horizontally */
          }

          .book-details > * {
            margin-bottom: 8px; /* Add spacing between elements */
          }
        }
      `}</style>
    </AuthorLayout>
  );
};

export default LibraryPage;
