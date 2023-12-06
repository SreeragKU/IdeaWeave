import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Avatar, Button, Carousel, Input, Divider } from "antd";
import Head from "next/head";
import Link from "next/link";
import useCategory from "../hooks/useCategory";

const { Meta } = Card;
const { Search } = Input;

export const Posts = ({ posts }) => {
  const [allPosts, setAllPosts] = useState(posts);
  const [originalPosts, setOriginalPosts] = useState(posts);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mostRecommended, setMostRecommended] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [carouselPosts, setCarouselPosts] = useState([]);
  const postsPerPage = 8;
  const {categories} = useCategory();

  useEffect(() => {
    getTotal();
  }, []);

  useEffect(() => {
    setOriginalPosts(posts);
    setAllPosts(posts);
    setVisiblePosts(posts.slice(0, postsPerPage));
  }, [posts]);

  useEffect(() => {
    findMostRecommended();
    updateCarouselPosts();
    updateVisiblePosts();
  }, [allPosts, page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/post-count");
      setTotal(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCarouselPosts = () => {
    const top5 = allPosts
      .filter((post) => post.commentCount > 0)
      .sort((a, b) => b.commentCount - a.commentCount)
      .slice(0, 5);
    setCarouselPosts(top5);
  };

  const updateVisiblePosts = () => {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const newVisiblePosts = allPosts.slice(startIndex, endIndex);
    setVisiblePosts(newVisiblePosts);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    if ((nextPage - 1) * postsPerPage < total) {
      setPage(nextPage);
      const startIndex = (nextPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const newVisiblePosts = allPosts.slice(startIndex, endIndex);
      setVisiblePosts((prevVisiblePosts) => [
        ...prevVisiblePosts,
        ...newVisiblePosts,
      ]);
    }
  };

  const loadPrevious = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    const startIndex = (prevPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const newVisiblePosts = allPosts.slice(startIndex, endIndex);
    setVisiblePosts(newVisiblePosts);
  };

  const handleSearch = async (value) => {
    setSearchTerm(value);
    const result = originalPosts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setAllPosts(result);
    setPage(1);
    updateVisiblePosts();
  };

  const findMostRecommended = () => {
    const postsWithComments = allPosts.filter((post) => post.commentCount > 0);

    if (postsWithComments.length > 0) {
      const recommendedPost = postsWithComments.reduce((prev, current) =>
        current.commentCount > (prev ? prev.commentCount : 0) ? current : prev
      );
      setMostRecommended(recommendedPost);
    } else {
      setMostRecommended(null);
    }
  };

  const handleCategoryClick = (slug) => {
    router.push(`/category/${slug}`);
  };

  return (
    <>
      <Head>
        <title>Recent New Releases</title>
        <meta description="Exciting new Books to invigorate your creative mind." />
      </Head>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          marginTop: 70,
          padding: "0 20px",
          overflowX: "hidden",
        }}
      >
        <h2>Recommended</h2>
        <Carousel autoplay style={{ maxWidth: "100%" }}>
          {carouselPosts.map((post, index) => (
            <Link href={`/post/${post.slug}`} key={post.slug}>
              <Card
                hoverable
                style={{ width: "100%", marginTop: 20 }}
                cover={
                  <Avatar
                    shape="square"
                    style={{ height: "300px" }}
                    src={post.coverImage?.url || "images/default.jpg"}
                    alt={post.title}
                  />
                }
              >
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "4px 8px",
                    color: "white",
                  }}
                >
                  Rank {index + 1}
                </div>
                <div style={{marginBottom:20}}><Meta title={post.title} /></div>
                
              </Card>
            </Link>
          ))}
        </Carousel>
      </div>
      <Divider>Categories</Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px 0",
        }}
      >
        {categories.map((c) => (
          <Link href={`/category/${c.slug}`} key={c._id}>
            <Button
              style={{
                margin: "0 8px 8px 0",
                background: "#468570", 
                color: "white",
              }}
            >
              {c.name}
            </Button>
          </Link>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 50,
          padding: "0 20px",
          overflowX: "hidden",
        }}
      >
        <h2>Recent New Releases</h2>
        <Search
          placeholder="Search for books"
          onSearch={handleSearch}
          enterButton
          style={{ maxWidth: 300, margin: "0 auto" }}
        />
      </div>

      <Row
        gutter={16}
        style={{ marginTop: 20, padding: "0 20px", overflowX: "hidden" }}
      >
        {visiblePosts.map((post) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <Card
                hoverable
                style={{ width: "100%", maxWidth: "300px", marginBottom: 20 }}
                cover={
                  <Avatar
                    shape="square"
                    style={{ height: "200px" }}
                    src={post.coverImage?.url || "images/default.jpeg"}
                    alt={post.title}
                    id="book"
                  />
                }
              >
                {mostRecommended && mostRecommended._id === post._id && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "gold",
                      padding: "4px 8px",
                      color: "black",
                    }}
                  >
                    Most Recommended
                  </div>
                )}

                {carouselPosts.findIndex((book) => book._id === post._id) !==
                  -1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: "green",
                      padding: "4px 8px",
                      color: "white",
                    }}
                  >
                    Top{" "}
                    {carouselPosts.findIndex((book) => book._id === post._id) +
                      1}
                  </div>
                )}

                <Meta title={post.title} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <div
        style={{
          textAlign: "center",
          marginTop: 20,
          padding: "0 20px",
          overflowX: "hidden",
        }}
      >
        <Button
          onClick={loadPrevious}
          disabled={page === 1}
          style={{ marginRight: "10px" }}
        >
          Previous
        </Button>{" "}
        <Button
          onClick={loadMore}
          disabled={page * postsPerPage >= total}
          loading={loading}
          style={{ marginBottom: 50, marginLeft: "10px" }}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/posts/1`);
  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;
