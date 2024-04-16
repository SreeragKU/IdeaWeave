import { useEffect, useContext, useState } from 'react'
import { Row, Col, Button, Typography, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import { PostContext } from '../../../context/post'
import { useRouter } from 'next/router'
import AuthorLayout from '../../../components/layout/AuthorLayout'
import Link from 'next/link'
import PostsList from '../../../components/posts/PostsList'
import { AuthContext } from '../../../context/auth'

const { Title, Text } = Typography

function Posts() {
  const [post, setPost] = useContext(PostContext)
  const [auth, setAuth] = useContext(AuthContext)
  const { posts } = post
  const router = useRouter()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (auth.token) fetchPosts()
  }, [auth?.token])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/post-by-author')
      setPost((prev) => ({ ...prev, posts: data }))
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = async (post) => {
    return router.push(`/author/posts/${post.slug}`)
  }

  const handleDelete = async (post) => {
    try {
      const { data } = await axios.delete(`/post/${post._id}`)
      if (data.ok) {
        setPost((prev) => ({
          ...prev,
          posts: prev.posts.filter((p) => p._id !== post._id),
        }))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthorLayout>
      <Row gutter={[16, 16]} style={{ marginLeft: 85, padding: '16px' }}>
        <Col span={24} style={{ marginTop: '30px', marginBottom: '16px' }}>
          <Button type="primary">
            <Link href="/author/posts/new">
              <PlusOutlined /> Add New
            </Link>
          </Button>
        </Col>
        <Col span={24}>
          <Title level={3} style={{ marginTop: loading ? '15px' : '0' }}>
            {loading ? <Spin /> : `${posts?.length} Posts`}
          </Title>
        </Col>
        <Col span={24}>
          <PostsList
            posts={posts}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </Col>
      </Row>
    </AuthorLayout>
  )
}

export default Posts
