import { Button, Spin } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../context/theme'

const FullWidthImage = ({
  auth,
  title = 'IdeaWeave',
  subtitle = 'Content Management System',
  fullWidthImage = '/images/image3.jpg',
}) => {
  const [theme] = useContext(ThemeContext)
  const [imageLoading, setImageLoading] = useState(true)
  const textStrokeColor = theme === 'light' ? '#ffffff' : '#000'

  const [titleStyles, setTitleStyles] = useState({
    WebkitTextStroke: `0.02rem ${textStrokeColor}`,
    textStroke: `0.02rem ${textStrokeColor}`,
    fontFamily: "'Just Me Again Down Here', sans-serif",
    margin: 0,
    fontSize: '10vw',
    fontWeight: 'bold',
    color: theme === 'light' ? '#000' : '#fff',
  })

  const [subtitleStyles, setSubtitleStyles] = useState({
    WebkitTextStroke: `0.01rem ${textStrokeColor}`,
    textStroke: `0.01rem ${textStrokeColor}`,
    fontSize: '3vw',
    marginTop: '-1rem',
    color: theme === 'light' ? '#333' : '#ccc',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        setTitleStyles({
          ...titleStyles,
          fontSize: '8vw',
        })
        setSubtitleStyles({
          ...subtitleStyles,
          fontSize: '3vw',
        })
      } else if (
        window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches
      ) {
        setTitleStyles({
          ...titleStyles,
          fontSize: '8vw',
        })
        setSubtitleStyles({
          ...subtitleStyles,
          fontSize: '3vw',
        })
      }
      // Media query conditions for mobile screens
      else if (window.matchMedia('(max-width: 767px)').matches) {
        setTitleStyles({
          ...titleStyles,
          fontSize: '27vw',
        })
        setSubtitleStyles({
          ...subtitleStyles,
          fontSize: '8vw',
        })
      }
    }
  }, [titleStyles, subtitleStyles, theme])

  const getRedirectLink = () => {
    if (auth?.role === 'Admin') {
      return '/admin'
    } else if (auth?.role === 'Author') {
      return '/author'
    } else if (auth?.role === 'Subscriber') {
      return '/subscriber'
    } else if (auth?.role === 'Reader') {
      return '/reader'
    } else {
      return '/signin'
    }
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&family=Poppins:wght@100;300;400;800&display=swap"
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '75vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {imageLoading && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Spin size="large" style={{ marginTop: '20%' }} />
          </div>
        )}

        <img
          src={fullWidthImage}
          alt="CMS"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: imageLoading ? 'none' : 'block',
          }}
          onLoad={handleImageLoad}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '2rem',
            display: imageLoading ? 'none' : 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={titleStyles}>{title}</h1>
          <p style={subtitleStyles}>{subtitle}</p>
          <Link href={getRedirectLink()}>
            <Button
              type="primary"
              size="large"
              icon={<SendOutlined />}
              id="explore"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FullWidthImage
