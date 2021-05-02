import React from 'react'
import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'
import { AppState } from '../../../redux/duck'
import { useSelector } from 'react-redux'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    ${p=>p.theme.media.tablet}{
        padding: 0 45px;
        max-width: 1100px;
        margin: auto;
    }
`


const Invoices:React.FC = () => {
    const invoiceList = useSelector((state:AppState)=>state.app.invoiceList);
    const loading = useSelector((state:AppState)=>state.app.invoiceListLoading);
    const error = useSelector((state:AppState)=>state.app.invoiceListError);
    const filters = useSelector((state:AppState)=>state.app.filters);
    let invoiceListFiltered
    const keysH = Object.keys(filters)
    const valH = Object.values(filters)

    if(valH.every(elem=>!elem)){
        invoiceListFiltered = [...invoiceList]
    }else{
        const keyFHelper = keysH.filter((elem, index)=>valH[index] ? elem : null)
        invoiceListFiltered = invoiceList.filter(elem=>keyFHelper.includes(elem.status) ? elem : null)
    }

    
    
    
    return (
        <Wrapper>
            {error ? <h1>{error}</h1> : loading ? <h1>Loading</h1> : invoiceListFiltered.length ? invoiceListFiltered.map(elem=><InvoiceItem props={elem} key={elem.id} />) : <h1>no Invoice found</h1>}
        </Wrapper>
    )
}

export default React.memo(Invoices)
