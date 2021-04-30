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

    return (
        <Wrapper>
            {error ? <h1>{error}</h1> : loading ? <h1>Loading</h1> : invoiceList.length ? invoiceList.map(elem=><InvoiceItem props={elem} key={elem.id} />) : <h1>no Invoice found</h1>}
        </Wrapper>
    )
}

export default Invoices
