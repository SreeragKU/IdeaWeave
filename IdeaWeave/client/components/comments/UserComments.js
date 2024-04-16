import { useEffect, useState, useContext } from 'react'
import { Row, Col, Button, Input, List, Modal, Spin } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { AuthContext } from '../../context/auth'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import CommentForm from './CommentForm'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { toast } from 'react-hot-toast'

dayjs.extend(localizedFormat)

function UserComments() {
  const [auth, setAuth] = useContext(AuthContext)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [selectedComment, setSelectedComment] = useState({})
  const [content, setContent] = useState('')
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  useEffect(() => {
    if (auth?.token) {
      fetchComments()
    }
  }, [auth?.token])

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/user-comments`)
      setComments(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const handleDelete = async (comment) => {
    confirm({
      title: 'Are you sure you want to delete this comment?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      async onOk() {
        try {
          const { data } = await axios.delete(`/comment/${comment._id}`)
          if (data?.ok) {
            setComments(comments.filter((c) => c._id !== comment._id))
            setTotal(total - 1)
            toast.success('Comment deleted successfully')
          }
        } catch (error) {
          console.log(error)
        }
      },
      onCancel() {
        return
      },
    })
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const { data } = await axios.put(`/comment/${selectedComment._id}`, {
        content,
      })

      let arr = comments
      const index = arr.findIndex((c) => c._id === selectedComment._id)
      arr[index].content = data.content
      setComments(arr)

      setVisible(false)
      setLoading(false)
      setSelectedComment({})

      toast.success('Comment updated')
    } catch (err) {
      console.log(err)
      setVisible(false)
    }
  }

  const filteredComments = comments?.filter(
    (comment) =>
      comment.content.toLowerCase().includes(keyword) ||
      comment?.postedBy?.name.toLowerCase().includes(keyword) ||
      (comment?.postedBy?.role &&
        comment.postedBy.role.toLowerCase().includes(keyword))
  )

  return (
    <>
      {loading ? (
        <Spin size="large" style={{ marginLeft: 120, marginTop: 80 }} />
      ) : (
        <Row style={{ paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
          <Col xs={24} sm={24} lg={16} offset={1}>
            <h1 style={{ marginTop: 15 }}>{comments?.length} Comments</h1>

            <Input
              placeholder="Search"
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.toLowerCase())}
            />

            <List
              itemLayout="horizontal"
              dataSource={filteredComments}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Link href={`/post/${item?.postId?.slug}#${item._id}`}>
                      view
                    </Link>,
                    <a
                      onClick={() => {
                        setSelectedComment(item)
                        setVisible(true)
                        setContent(item.content)
                      }}
                    >
                      edit
                    </a>,
                    <a onClick={() => handleDelete(item)}>delete</a>,
                  ]}
                >
                  <List.Item.Meta
                    description={`On ${item?.postId?.title} | ${
                      item?.postedBy?.name
                    } | ${dayjs(item.createdAt).format('L LT')}`}
                    title={item.content}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )}
      <Row>
        <Col span={24}>
          <Modal
            visible={visible}
            title="Update comment"
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
          >
            <CommentForm
              handleSubmit={handleSubmit}
              comment={content}
              setComment={setContent}
              loading={loading}
            />
          </Modal>
        </Col>
      </Row>
    </>
  )
}

export default UserComments
