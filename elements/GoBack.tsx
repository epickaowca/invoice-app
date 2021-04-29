import React, { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/duck'
import styled from 'styled-components'
import ArrowLeft from '../public/assets/icon-arrow-left.svg'

interface StyledInterface extends CSSProperties {
    '--color-variable': string
}

const Wrapper = styled.div`
    color: var(--color-variable);
    position: relative;
    z-index: 3;
    cursor: pointer;
    display: flex;
    align-items: center;
    & > p{
        font-weight: bold;
    }
    & > svg{
        margin-right: 15px;
    }
`

interface ReactFCInterface {
    clickHandler?: ()=>{}
}

const GoBack:React.FC<ReactFCInterface> = ({clickHandler}) => {
    const darkMode = useSelector((state:AppState)=>state.app.darkMode)
    const h1Color =  darkMode ? 'white' : 'black'
    return (
        <Wrapper onClick={clickHandler} style={{'--color-variable': h1Color} as StyledInterface}>
            <ArrowLeft />
            <p>Go back</p>
        </Wrapper>
    )
}

export default React.memo(GoBack)
