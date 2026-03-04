import { Title } from '@mantine/core'
import RotatingCube from '../components/RotatingCube'
import BackButton from '../components/BackButton'

export default function Info2() {
  return (
    <>
      <div className="content" style={{ gap: '5rem' }}>
        <RotatingCube />
        <Title
          order={2}
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#000',
          }}
        >
          Noam@Shukroon.com
        </Title>
      </div>
      <BackButton to="/" />
    </>
  )
}
