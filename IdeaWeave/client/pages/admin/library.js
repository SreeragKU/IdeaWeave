import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, List, Button, Space, Typography } from "antd";
import ReaderLayout from "../../components/layout/ReaderLayout";
import { AuthContext } from "../../context/auth";
import Link from "next/link";

const { Meta } = Card;
const { Text } = Typography;

const LibraryPage = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);

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

  return (
    <ReaderLayout>
      <div style={{ marginTop: 70, marginLeft: 140, marginRight: 20 }}>
        <h1>Personal Library</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={library}
            renderItem={(book) => (
              <List.Item>
                <Link href={`/post/${book.slug}`}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={book.title} src={book.coverImage} />}
                  >
                    <Meta
                      title={book.title}
                      description={`By ${book.postedBy}`}
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        )}
      </div>
    </ReaderLayout>
  );
};

export default LibraryPage;
