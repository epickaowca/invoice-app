import { CSSProperties } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/duck/index'



type StyledBtnType = { case2:boolean, darkMode?:boolean }

const StyledButton = styled.button<StyledBtnType>((
    { theme: {colors: {lavender, dark_slate_blue, white_lavender, light_steel_blue, cornflower_blue, black, very_dark_blue}}, case2, darkMode }
    ) =>`
    white-space: nowrap;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 25px;
    padding: 20px 25px;
    background: ${case2 ? '#373B53' : darkMode ? dark_slate_blue : white_lavender};
    color: ${darkMode ? lavender : case2 ? light_steel_blue : cornflower_blue};
    &:hover{
        background: ${case2 ? darkMode ? very_dark_blue : black : darkMode ? 'white' : lavender};
    }
    
`)

interface BtnInterface {
    case2?: boolean
    clickHandler?: ()=>{}
}

const SecondaryButton:React.FC<BtnInterface> = ({ case2, clickHandler, children }) => {
    const darkMode = useSelector((state:AppState)=>state.app.darkMode)
    return (
        <StyledButton darkMode={darkMode} onClick={clickHandler} case2={case2}>
            {children}
        </StyledButton>
    )
}

export default SecondaryButton
