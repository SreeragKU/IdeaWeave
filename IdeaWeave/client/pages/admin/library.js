import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, List, Typography, Button, Space, Modal } from "antd";
import { AuthContext } from "../../context/auth";
import Link from "next/link";
import {
  AppstoreOutlined,
  BarsOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AdminLayout from "../../components/layout/AdminLayout";

const { Meta } = Card;
const { Text } = Typography;

const LibraryPage = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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

  const handleCardSelect = (book) => {
    const isSelected = selectedCards.includes(book._id);

    if (isSelected) {
      setSelectedCards(selectedCards.filter((id) => id !== book._id));
    } else {
      setSelectedCards([...selectedCards, book._id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCards([]);
    } else {
      const allBookIds = library.map((book) => book._id);
      setSelectedCards(allBookIds);
    }

    setSelectAll(!selectAll);
  };

  const handleBulkDelete = async () => {
    try {
      console.log('Book Ids', selectedCards);
      
      await axios.delete("/bulkdelete-from-library", { data: { bookIds: selectedCards } });
      // Update the library after successful deletion
      const userId = auth.user._id;
      const response = await axios.get(`/get-library/${userId}`);
      setLibrary(response.data.library);
      // Clear selected cards
      setSelectedCards([]);
      setSelectAll(false);
    } catch (error) {
      console.error("Failed to delete books:", error);
    }
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
            <Button onClick={handleBulkDelete} danger icon={<DeleteOutlined />}>
              Delete Selected
            </Button>
            <div className="select-all">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectAll}
              />
              <span>Select All</span>
            </div>
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
                <div
                  className={`book-card ${
                    selectedCards.includes(book._id) ? "selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleCardSelect(book)}
                    checked={selectedCards.includes(book._id)}
                  />
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
                    </Card>
                  </Link>
                </div>
              </List.Item>
            )}
          />
        ) : (
          <List
            dataSource={library}
            renderItem={(book) => (
              <List.Item>
                <div
                  className={`book-list-card ${
                    selectedCards.includes(book._id) ? "selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleCardSelect(book)}
                    checked={selectedCards.includes(book._id)}
                  />
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
                          <Meta
                            title={book.title}
                            description={`By ${book.postedBy}`}
                          />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>

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
          position: relative;
        }

        .book-cover {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .book-list-card,
        .book-card {
          position: relative;
        }

        .book-list-card .individual-delete-btn,
        .book-card .individual-delete-btn {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .book-list-card {
          width: 100%;
          height: 200px;
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
          flex-direction: column;
          width: 100%;

          @media only screen and (min-width: 768px) {
            flex-direction: row;
            width: 1200px;
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

        .select-all {
          margin-top: 10px;
          display: flex;
          align-items: center;
        }

        .select-all input {
          margin-right: 8px;
        }

        .individual-delete-btn {
          margin-left: 10px;
        }

        .selected {
          background-color: #606361; 
        }

        @media only screen and (max-width: 767px) {
          .library-container {
            margin: 40px;
          }

          .book-details {
            display: none;
          }
        }
      `}</style>
    </AdminLayout>
  );
};

export default LibraryPage;
