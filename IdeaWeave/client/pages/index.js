import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import Head from "next/head";
import FullWidthImage from "../components/pages/FullWidthImage";
import useNumbers from "../hooks/useNumbers";
import RenderProgress from "../components/posts/RenderProgress";
import { Row, Col, Divider, Button } from "antd";
import useLatestPosts from "../hooks/useLatestPosts";
import useCategory from "../hooks/useCategory";
import Link from "next/link";
import ParallaxImage from "../components/pages/ParallaxImage";
import { ThemeContext } from "../context/theme";
import { ThunderboltOutlined } from "@ant-design/icons";
import Footer from "../components/pages/Footer";
import axios from "axios";
import useHome from "../hooks/useHome";

function Home() {
  const [auth, setAuth] = useContext(AuthContext);
  const { numbers } = useNumbers();
  const { latestPosts } = useLatestPosts();
  const { categories } = useCategory();
  const [theme] = useContext(ThemeContext);
  const { title, subtitle, fullWidthImage, setTitle, setSubtitle, setFullWidthImage } = useHome();

  const textStrokeColor = theme === "light" ? "#ffffff" : "#000";

  return (
    <>
      <Head>
        <title>IdeaWeave</title>
        <meta
          name="description"
          content="Read latest books on web development"
        />
      </Head>

      <FullWidthImage
        auth={auth.user}
        title={title}
        subtitle={subtitle}
        fullWidthImage={fullWidthImage?.url}
      />

      <Row>
        {/* posts */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.posts}
            name="Books"
            link="/admin/posts"
          />
        </Col>
        {/* comments */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.comments}
            name="Comments"
            link="/admin/comments"
          />
        </Col>
        {/* catgories */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.categories}
            name="Categories"
            link="/admin/categories"
          />
        </Col>
        {/* users */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.users}
            name="Users"
            link="/admin/users"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ParallaxImage>
            <h2
              style={{
                textAlign: "center",
                fontSize: "74px",
                textShadow: "8px 8px 12px #000000",
                color: "#fff",
                WebkitTextStroke: `0.5px ${textStrokeColor}`,
                textStroke: `0.5px ${textStrokeColor}`,
              }}
            >
              RECENT BOOKS
            </h2>
            <Divider>
              <ThunderboltOutlined />
            </Divider>
            <div
              style={{
                textAlign: "center",
                fontSize: "15px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {latestPosts.map((post) => (
                <Link href={`/post/${post.slug}`} key={post.slug}>
                  <h3
                    style={{
                      color: "#fff",
                      background: "rgba(0, 0, 0, 0.3)",
                      padding: "10px",
                      borderRadius: "100px",
                      margin: "10px 0",
                    }}
                  >
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </ParallaxImage>
        </Col>
      </Row>
      <Row>
        <Col
          span={24}
          style={{ textAlign: "center", marginTop: 80, marginBottom: 80 }}
        >
          <Divider>CATEGORIES</Divider>
          <div style={{ textAlign: "center" }}>
            {categories.map((c) => (
              <Link href={`/category/${c.slug}`} key={c._id}>
                <Button style={{ margin: 2 }}>{c.name}</Button>
              </Link>
            ))}
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Home;
