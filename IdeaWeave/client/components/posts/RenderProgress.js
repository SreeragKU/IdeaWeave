import { Progress } from 'antd'
import {
  BookOutlined,
  CommentOutlined,
  AppstoreOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import CountUp from 'react-countup'

const RenderProgress = ({ number, name, link = '#' }) => {
  const getIcon = (progressName) => {
    switch (progressName.toLowerCase()) {
      case 'books':
        return <BookOutlined />
      case 'comments':
        return <CommentOutlined />
      case 'categories':
        return <AppstoreOutlined />
      case 'users':
        return <UserOutlined />
      default:
        return null
    }
  }

  return (
    <Link href={link}>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Progress
          type="circle"
          strokeColor={{
            '0%': '#666',
            '50%': '#fff',
            '100%': '#111',
          }}
          percent={100}
          format={() => <CountUp end={number} duration={2} separator="," />}
        />
        <p style={{ marginTop: 18, color: '#666' }}>
          {getIcon(name)} {name.toUpperCase()}
        </p>
      </div>
    </Link>
  )
}

export default RenderProgress
