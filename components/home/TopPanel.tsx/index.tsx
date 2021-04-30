import { CSSProperties } from 'react'
import { AppState } from '../../../redux/duck'
import styled from 'styled-components'
import Filter from './Filter'
import Article from './Article'
import PrimaryButton from '../../../elements/PrimaryButton' 
import { useSelector, useDispatch } from 'react-redux'
import { setInvoiceFormVisible } from '../../../redux/duck/app'

interface StyledInterface extends CSSProperties{
    '--color-dark-mode': string
}

const Wrapper = styled.section`
    color: var(--color-dark-mode);
    max-width: 1100px;
    padding: 25px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    & > div{
        display: flex;
        align-items: center;
        & > button{
            margin-left: 15px;
        }
    }
    ${p=>p.theme.media.tablet}{
        padding: 75px 45px;
        & > div{
            & > button{
                margin-left: 50px;
            }
        }
    }
`

const TopPanel:React.FC = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector((state: AppState)=>state.app.darkMode)
    const colorStyle = darkMode ? 'white' : 'black';
    return (
        <Wrapper style={{'--color-dark-mode': colorStyle} as StyledInterface}>
            <Article />
            <div>
                <Filter darkMode={darkMode} />
                <PrimaryButton clickHandler={()=>dispatch(setInvoiceFormVisible({visibleBoolean: true, editCase: false}))} />
            </div>
        </Wrapper>
    )
}

export default TopPanel
