import styled from 'styled-components'
import Header from '../components/Header'
import TopPanel from '../components/TopPanel.tsx'

const Wrapper = styled.div`
  background: #F8F8FB;
  min-height: 100vh;
`

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <TopPanel />
    </Wrapper>
  )
}

