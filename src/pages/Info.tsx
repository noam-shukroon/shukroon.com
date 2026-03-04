import { Title } from '@mantine/core'

export default function Info() {
  return (
    <div className="content">
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
  )
}
