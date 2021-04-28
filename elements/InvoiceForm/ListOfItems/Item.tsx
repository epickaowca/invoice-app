import styled from 'styled-components'
import RemoveIco from '../../../public/assets/icon-delete.svg'
import React, { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/duck'
import { updateItem, deleteItem } from '../../../redux/duck/invoiceForm'

const StyledItem = styled.div`
    margin: 45px 0px;
    & > div{
        display: flex;
        & > label{
        
            & > input{
                &::-moz-appearance: textfield;
                &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }
            &:nth-child(1){
                flex: 1;
            }
            &:nth-child(2){
                margin: 15px 15px;
                flex: 2;
            }
            &:nth-child(3){
                flex: 3;
                & > div{
                    display: flex;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    justify-content: space-between;
                    & > span{
                        color: ${p=>p.theme.colors.cornflower_blue};
                        margin-right: 5px;
                    }
                    & > svg{
                        cursor: pointer;
                        &:hover{
                            opacity: .7;
                        }
                    }
                }
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        margin: 0px;
        display: flex;
        & > label{
            flex: 3;
        }
        & > div{
            margin-left: 15px;
            flex: 4;
        }
        & p {
            display: none;
        }
    }
`

interface ItemInteface {
    id: string
}

const Item:React.FC<ItemInteface> = ({id}) => {
    const reduxItem = useSelector((state:AppState)=>state.invoiceForm.items.find(elem=>elem.id === id))
    const dispatch = useDispatch()
    const stateHandler = (e:ChangeEvent<HTMLInputElement>, change_sum?:boolean)=>{
        dispatch(updateItem({id: id, name: e.target.name, value: e.target.value, change_sum}))
    }

    const {name, quantity, price, total} = reduxItem
    return (
        <StyledItem>
            <label>
                <p>Item Name</p>
                <input name='name' type='text' onChange={e=>stateHandler(e)} value={name} />
            </label>
            <div>
                <label>
                    <p>Qty.</p>
                    <input name='quantity' type='number' onChange={e=>stateHandler(e, true)} value={quantity} />
                </label>
                <label>
                    <p>Price</p>
                    <input name='price' type='number' onChange={e=>stateHandler(e, true)} value={price} />
                </label>
                <label>
                    <p>Total</p>
                    <div>
                        <span>{total}</span>
                        <RemoveIco onClick={()=>dispatch(deleteItem(id))} />
                    </div>
                </label>
            </div>
        </StyledItem>
    )
}

export default React.memo(Item)
