import React from 'react'
import Item from './Item'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppState } from '../../../../redux/duck'

const Wrapper = styled.section`
    padding: 15px;
    ${p=>p.theme.media.tablet}{
        padding: 0px 15px;
    }
`

interface RFInterface{
    id: string
}

const ItemList:React.FC<RFInterface> = ({id}) => {
    const stateInvoice = useSelector((state:AppState) => state.app.invoiceList.find(elem=>elem.id === id))
    return (
        <Wrapper>
            {stateInvoice && stateInvoice.items.map(elem=><Item key={elem.id} item={elem} />)}
        </Wrapper>
    )
}

export default React.memo(ItemList)
