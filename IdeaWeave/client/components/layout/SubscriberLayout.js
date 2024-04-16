import { useContext, useEffect, useState } from 'react'
import { Layout } from 'antd'
import SubscriberNav from '../nav/SubscriberNav'
import { AuthContext } from '../../context/auth'
import { useRouter } from 'next/router'
import axios from 'axios'
import LoadingtoRedirect from '../LoadingToRedirect'

const { Content } = Layout

export default function SubscriberLayout({ children }) {
  const [auth, setAuth] = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(true)
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    if (auth?.token) getCurrentSubscriber()
  }, [auth?.token])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const getCurrentSubscriber = async () => {
    try {
      const { data } = await axios.get('/current-subscriber')
      setLoading(false)
    } catch (error) {
      console.log(error)
      router.push('/')
    }
  }

  if (loading) {
    return <LoadingtoRedirect />
  }

  return (
    <Layout>
      <SubscriberNav isOpen={isNavOpen} toggleNav={toggleNav} />
      <Layout
        style={{ marginLeft: isNavOpen ? 90 : 80, transition: 'margin 0.5s' }}
      >
        <Content style={{ padding: '10px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
