import styled from 'styled-components'
import PrimaryButton from '../../PrimaryButton'
import Item from './Item'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/duck'
import { addItem as addItemToRedux } from '../../../redux/duck/invoiceForm'

const StyledItemList = styled.div`
    position: relative;    
    & > h1{
        color: #777F98;
        margin-bottom: 20px;
    }
    & > button{
        margin-top: 45px;
    }
    & > div{
        display: none;
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            display: flex;
            justify-content: space-between;
            & > p{
                flex: 3;
                margin-right: 15px;
                color: ${p=>p.theme.colors.cornflower_blue};
            }
            & > div{
                flex: 4;
                justify-content: space-between;
                display: flex;
                & > p{
                    color: ${p=>p.theme.colors.cornflower_blue};
                    &:nth-child(1){
                        flex: 1;
                    }
                    &:nth-child(2){
                        flex: 2;
                        margin: 0px 15px;
                    }
                    &:nth-child(3){
                        flex: 3;
                    }
                }
            }
        }
    }
`

const IdGenerator = ()=>Math.random().toString(36).substr(2, 9)


const ItemList:React.FC = () => {
    const reduxItems = useSelector((state:AppState)=>state.invoiceForm.items)
    const dispatch = useDispatch()

    const addItem = ()=>{
        dispatch(addItemToRedux({ name: "", quantity: 1, price: 0, total: "0.00", id:IdGenerator()}))
    }


    return (
        <StyledItemList>
            <h1>Item List</h1>
            <div>
                <p>Item Name</p>
                <div>
                    <p>Qty.</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
            </div>
            <section>
                {reduxItems.map((item) => <Item key={item.id} id={item.id}/>)}
            </section>
            <PrimaryButton clickHandler={addItem} case2 content='+ Add New Item' />
        </StyledItemList>
    )
}

export default ItemList
