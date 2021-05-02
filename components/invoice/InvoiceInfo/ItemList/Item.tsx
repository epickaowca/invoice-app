import styled from 'styled-components'
import { defaultFormState } from '../../../../elements/InvoiceForm/utility'

const Wrapper = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div{
        &:nth-child(1){

        }
        &:nth-child(2){
            & > p{
                display: none;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(1){
                flex: 2;
                & > p{
                    display: none;
                }
            }
            &:nth-child(2){
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex: 3;
                & > p{
                    display: block;
                }
            }
        }
    }
`

interface RFInterface {
    item: typeof defaultFormState.items[0]
}

const Item:React.FC<RFInterface> = ({item}) => {
    const { name, quantity, price, total } = item
    return (
        <Wrapper>
            <div>
                <strong>{name}</strong>
                <p>{quantity}x £ {price}</p>
            </div>
            <div>
                <p>{quantity}</p>
                <p>£ {price}</p>
                <strong>£ {total}</strong>
            </div>
        </Wrapper>
    )
}

export default Item
