import styled from 'styled-components'
import PrimaryButton from '../../PrimaryButton'
import Item from './Item'
import { useState, useEffect, useCallback } from 'react'

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

interface RFInterface {
    updateFormState: (name: any, value: any, container?: any) => void
} 


const ItemList:React.FC<RFInterface> = ({updateFormState}) => {
    const [item_list_state, change_item_list_state] = useState([{ name: "", quantity: 1, price: 0, total: "0.00", id: 'xdwafe'}])
    const addItem = useCallback(()=>{
        change_item_list_state(prev=>[...prev, { name: "", quantity: 1, price: 0, total: "0.00", id:IdGenerator()}])
    },[])

    useEffect(() => {
        updateFormState('items', item_list_state)
    }, [item_list_state])
    
    const updateItem = useCallback((id, e)=>{
        change_item_list_state(prev=>prev.map(elem=>{
            if(elem.id === id){
                    const { name, value } = e.target
                    const newVal = {...elem}
                    newVal[name] = value
                    if(name === 'quantity' || name === 'price'){
                        newVal.total = (newVal.quantity*newVal.price).toFixed(2)
                    }
                    return newVal
            }else{
                return elem
            }
        }))
    },[])

    const deleteHandler1 = useCallback((id)=>{
        change_item_list_state(prev=>prev.filter(elem=>elem.id !== id))
    },[])


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
                {item_list_state.map((item) => <Item key={item.id} itemProps={item} deleteHandler={deleteHandler1} setProps={updateItem} />)}
            </section>
            <PrimaryButton clickHandler={addItem} case2 content='+ Add New Item' />
        </StyledItemList>
    )
}

export default ItemList
