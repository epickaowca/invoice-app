import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'



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
    return (
        <Wrapper>
            <InvoiceItem />
            <InvoiceItem />
        </Wrapper>
    )
}

export default Invoices
