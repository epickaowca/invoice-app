import { CSSProperties } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import TopPanel from '../components/TopPanel.tsx'
import Invoices from '../components/Invoices'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/duck/index'

interface CssVariables extends CSSProperties{
  '--bg-color': string
}


const Wrapper = styled.div`
  background: var(--bg-color);
  min-height: 100vh;
`

const Home:React.FC = ()=> {
  const darkMode = useSelector((state:AppState)=>state.app.darkMode);
  const bgColor = !darkMode ? '#F8F8FB' : '#141625'
  return (
    <Wrapper style={{'--bg-color': bgColor} as CssVariables}>
      <Header />
      <TopPanel />
      <Invoices />
    </Wrapper>
  )
}

export default Home