import styled from 'styled-components'
import Filter from './Filter'
import Article from './Article'
import PrimaryButton from '../../elements/PrimaryButton' 

const Wrapper = styled.section`
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
    return (
        <Wrapper>
            <Article />
            <div>
                <Filter />
                <PrimaryButton />
            </div>
        </Wrapper>
    )
}

export default TopPanel
