import Item from './Item'
import styled from 'styled-components'

const Wrapper = styled.section`
    padding: 15px;
    ${p=>p.theme.media.tablet}{
        padding: 0px 15px;
    }
`

const ItemList:React.FC = () => {
    return (
        <Wrapper>
            <Item />
            <Item />
        </Wrapper>
    )
}

export default ItemList
