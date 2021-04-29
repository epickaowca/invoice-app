import { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/duck'
import styled from 'styled-components'


interface CssVariables extends CSSProperties{
    '--bg-color': string
  }
  
  const Wrapper = styled.div`
    background: var(--bg-color);
    min-height: 100vh;
  `

const GlobalRF:React.FC = ({children})=>{
    const darkMode = useSelector((state:AppState)=>state.app.darkMode);
    const bgColor = !darkMode ? '#F8F8FB' : '#141625'

    return(
        <Wrapper style={{'--bg-color': bgColor} as CssVariables}>
            {children}
        </Wrapper>
    )
}

export default GlobalRF