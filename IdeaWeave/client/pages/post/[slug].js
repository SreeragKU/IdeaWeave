import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Select,
  List,
  Avatar,
  Divider,
} from 'antd'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import BookFront from './BookFront'
import BubbleNav from '../../components/nav/BubbleNav'
import dayjs from 'dayjs'
import CommentForm from '../../components/comments/CommentForm'
import useLatestPosts from '../../hooks/useLatestPosts'
import Link from 'next/link'
import { AuthContext } from '../../context/auth'
import { toast } from 'react-hot-toast'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const { Title } = Typography
const { Option } = Select

const ReactQuillNoSSR = dynamic(
  () => import('react-quill').then((module) => module.default),
  { ssr: false }
)

const themes = {
  Default: {
    fontSize: 1.2,
    lineHeight: 1.6,
    backgroundColor: '#F0F2F5',
    color: 'black',
  },
  Fire: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: '#FF6B6B',
    color: 'black',
  },
  Ocean: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: '#36A2A6',
    color: 'white',
  },
  Forest: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  Sunset: {
    fontSize: 1.3,
    lineHeight: 1.7,
    backgroundColor: '#FFAC5D',
    color: 'black',
  },
  Midnight: {
    fontSize: 1.2,
    lineHeight: 1.6,
    backgroundColor: '#20232A',
    color: 'white',
  },
}

const SinglePost = ({ post, postComments }) => {
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  const [zoomLevel, setZoomLevel] = useState(1)
  const [selectedTheme, setSelectedTheme] = useState('Default')
  const [postContent, setPostContent] = useState(post ? post.content : '')
  const [currentVolume, setCurrentVolume] = useState(0)
  const [currentChapter, setCurrentChapter] = useState(0)
  const [comments, setComments] = useState(postComments)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const { latestPosts } = useLatestPosts()
  const [auth, setAuth] = useContext(AuthContext)

  useEffect(() => {
    if (post && post.volumes && post.volumes.length > 0) {
      setZoomLevel(1)
      setPostContent(
        post.volumes[currentVolume]?.chapters[currentChapter]?.content || ''
      )
    }
  }, [post, currentVolume, currentChapter])

  useEffect(() => {
    if (!post) {
      router.push('/_error')
    }
  }, [post, router])

  useEffect(() => {
    if (post && post.volumes && post.volumes.length > 0) {
      setPostContent(
        post.volumes[currentVolume]?.chapters[currentChapter]?.content || ''
      )
    }
  }, [zoomLevel, post, currentVolume, currentChapter])

  useEffect(() => {
    if (
      post &&
      post.volumes &&
      post.volumes[currentVolume] &&
      post.volumes[currentVolume].chapters &&
      post.volumes[currentVolume].chapters[currentChapter]
    ) {
      setPostContent(
        post.volumes[currentVolume].chapters[currentChapter].content
      )
    }
  }, [post, currentVolume, currentChapter])

  const handleZoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.1)
    }
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.1)
    }
  }

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme)
  }

  const handleTextToSpeech = () => {
    sendPostContentToBubbleNav(post.content)
  }

  const handleNextChapter = () => {
    if (currentChapter < post.volumes[currentVolume].chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
    } else {
      if (currentVolume < post.volumes.length - 1) {
        setCurrentVolume(currentVolume + 1)
        setCurrentChapter(0)
      }
    }
  }

  const handlePrevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1)
    } else {
      if (currentVolume > 0) {
        setCurrentVolume(currentVolume - 1)
        setCurrentChapter(post.volumes[currentVolume - 1].chapters.length - 1)
      }
    }
  }

  const handleSelect = (value) => {
    const [selectedVolume, selectedChapter] = value.split(':').map(Number)

    setCurrentVolume(selectedVolume - 1)
    setCurrentChapter(selectedChapter - 1)
  }

  const [isQuillLoaded, setIsQuillLoaded] = useState(false)

  useEffect(() => {
    setIsQuillLoaded(true)
    handleQuillLoad()
  }, [])

  const isAtFirstChapter = currentVolume === 0 && currentChapter === 0
  const isAtLastChapter =
    post?.volumes &&
    currentVolume === post.volumes.length - 1 &&
    currentChapter === post.volumes[currentVolume]?.chapters?.length - 1

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(`/comment/${post._id}`, { comment })
      setComments([data, ...comments])
      setComment('')
      toast.success('Comment posted successfully')
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const addToLibrary = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(`/add-to-library/${post._id}`, {
        postId: post._id,
      })
      if (data.success) {
        toast.success('Added to library successfully')
      } else {
        toast.error('Failed to add to library')
      }

      setLoading(false)
    } catch (err) {
      console.error(err)
      toast.error('An error occurred while adding to the library')
      setLoading(false)
    }
  }

  const handleQuillLoad = () => {
    setIsQuillLoaded(true)
    if (isQuillLoaded) {
      const quill = document.querySelector('.ql-editor')
      if (quill) {
        quill.style.fontSize = `${
          themes[selectedTheme].fontSize * zoomLevel
        }rem`
        quill.style.lineHeight = `${
          themes[selectedTheme].lineHeight * zoomLevel
        }`
        quill.style.backgroundColor = themes[selectedTheme].backgroundColor
        quill.style.color = themes[selectedTheme].color
        quill.style.padding = '16px'
      }
    }
  }

  useEffect(() => {
    if (isQuillLoaded) {
      const quill = document.querySelector('.ql-editor')
      if (quill) {
        quill.style.fontSize = `${
          themes[selectedTheme].fontSize * zoomLevel
        }rem`
        quill.style.lineHeight = `${
          themes[selectedTheme].lineHeight * zoomLevel
        }`
        quill.style.backgroundColor = themes[selectedTheme].backgroundColor
        quill.style.color = themes[selectedTheme].color
        quill.style.padding = '16px'
      }
    }
  }, [zoomLevel, selectedTheme, isQuillLoaded])

  return (
    <>
      <BubbleNav
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onThemeChange={handleThemeChange}
        onTextToSpeech={handleTextToSpeech}
        postContent={postContent}
        post={post}
        currentVolume={currentVolume}
        currentChapter={currentChapter}
      />

      <BookFront post={post} />

      <Head>
        <title>{post?.title || 'Untitled Post'}</title>
        <meta
          name="description"
          content={
            post?.content?.substring(0, 160) || 'No description available'
          }
        />
      </Head>

      <Row justify="center">
        <Col xs={24} xl={16}>
          {/* Add to Library Button */}
          {auth.token && (
            <Button type="primary" onClick={addToLibrary}>
              Add to Library
            </Button>
          )}
          <Card>
            <div style={{ marginBottom: 16, textAlign: 'center' }}>
              <Button
                type="primary"
                onClick={handlePrevChapter}
                disabled={isAtFirstChapter}
              >
                Previous Chapter
              </Button>{' '}
              <Select
                value={`${currentVolume + 1}:${currentChapter + 1}`}
                style={{
                  width: 200,
                  marginRight: 8,
                  borderRadius: 8,
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
                dropdownStyle={{ borderRadius: 8 }}
                onChange={handleSelect}
              >
                {post?.volumes?.map((volume, volumeIndex) => (
                  <Select.OptGroup
                    label={`Volume ${volumeIndex + 1}: ${volume.volume}`}
                    key={`volume-${volumeIndex}`}
                  >
                    {volume.chapters.map((chapter, chapterIndex) => (
                      <Option
                        key={`${volumeIndex}-${chapterIndex}`}
                        value={`${volumeIndex + 1}:${chapterIndex + 1}`}
                        style={{ padding: 10 }}
                      >
                        {`${chapter.name}`}
                      </Option>
                    ))}
                  </Select.OptGroup>
                ))}
              </Select>
              <Button
                type="primary"
                onClick={handleNextChapter}
                disabled={isAtLastChapter}
              >
                Next Chapter
              </Button>{' '}
            </div>
            <div
              style={{
                height: '650px',
                overflow: 'auto',
              }}
            >
              <ReactQuillNoSSR
                value={postContent}
                readOnly={true}
                theme="bubble"
                modules={{ toolbar: false }}
                style={{
                  visibility: isQuillLoaded ? 'visible' : 'hidden',
                }}
                onLoad={handleQuillLoad}
              />
            </div>
            <div
              style={{
                marginBottom: 16,
                textAlign: 'center',
                marginTop: 16,
              }}
            >
              <Button
                type="primary"
                onClick={handlePrevChapter}
                disabled={isAtFirstChapter}
              >
                Previous Chapter
              </Button>{' '}
              <Select
                value={`${currentVolume + 1}:${currentChapter + 1}`}
                style={{
                  width: 200,
                  marginRight: 8,
                  borderRadius: 8,
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
                dropdownStyle={{ borderRadius: 8 }}
                onChange={handleSelect}
              >
                {post?.volumes?.map((volume, volumeIndex) => (
                  <Select.OptGroup
                    label={`Volume ${volumeIndex + 1}: ${volume.volume}`}
                    key={`volume-${volumeIndex}`}
                  >
                    {volume.chapters.map((chapter, chapterIndex) => (
                      <Option
                        key={`${volumeIndex}-${chapterIndex}`}
                        value={`${volumeIndex + 1}:${chapterIndex + 1}`}
                        style={{ padding: 10 }}
                      >
                        {`${chapter.name}`}
                      </Option>
                    ))}
                  </Select.OptGroup>
                ))}
              </Select>
              <Button
                type="primary"
                onClick={handleNextChapter}
                disabled={isAtLastChapter}
              >
                Next Chapter
              </Button>{' '}
            </div>
            {isAtLastChapter && (
              <div>
                <Divider level={2} style={{ marginTop: 20 }}>
                  Latest Books
                </Divider>
                {latestPosts.map((p) => (
                  <Link href={`/post/${p.slug}`} key={p._id}>
                    <h4>{p.title}</h4>
                  </Link>
                ))}
              </div>
            )}
            <CommentForm
              comment={comment}
              setComment={setComment}
              handleSubmit={handleSubmit}
              loading={loading}
            />
            <div style={{ marginBottom: 50 }} id="commentSection"></div>

            <List
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={(item) => (
                <List.Item key={item._id} id={item._id}>
                  <List.Item.Meta
                    avatar={<Avatar>{item?.postedBy?.name?.charAt(0)}</Avatar>}
                    title={item?.postedBy?.name}
                    description={`${item.content} - ${dayjs(
                      item.createdAt
                    ).fromNow()}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const { data } = await axios.get(`${process.env.API}/post/${params.slug}`)
    return {
      props: {
        post: data.post,
        postComments: data.comments,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        post: null,
        postComments: [],
      },
    }
  }
}

export default SinglePost
