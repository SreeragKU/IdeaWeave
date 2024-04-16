import { useContext, useEffect, useState } from 'react'
import { Layout } from 'antd'
import AdminNav from '../nav/AdminNav'
import { AuthContext } from '../../context/auth'
import { useRouter } from 'next/router'
import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios'
import LoadingtoRedirect from '../LoadingToRedirect'

const { Content } = Layout

export default function AdminLayout({ children }) {
  const [auth, setAuth] = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(true)
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    if (auth?.token) getCurrentAdmin()
  }, [auth?.token])

  const getCurrentAdmin = async () => {
    try {
      const { data } = await axios.get('/current-admin')
      setLoading(false)
    } catch (error) {
      console.log(error)
      router.push('/')
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  if (loading) {
    return <LoadingtoRedirect />
  }

  return (
    <Layout>
      <AdminNav isOpen={isNavOpen} toggleNav={toggleNav} />
      <Layout
        style={{ marginLeft: isNavOpen ? 90 : 80, transition: 'margin 0.5s' }}
      >
        <Content style={{ padding: '10px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
