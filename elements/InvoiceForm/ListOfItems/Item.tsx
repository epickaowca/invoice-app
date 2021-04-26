import styled from 'styled-components'
import RemoveIco from '../../../public/assets/icon-delete.svg'
import React, { Dispatch, SetStateAction, ChangeEvent, useState, useEffect } from 'react'

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
    itemProps: any
    setProps: any
    deleteHandler: any
}

const Item:React.FC<ItemInteface> = ({setProps, itemProps, deleteHandler}) => {
    const stateHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setProps(itemProps.id, e)
    }
    return (
        <StyledItem>
            <label>
                <p>Item Name</p>
                <input name='name' type='text' onChange={stateHandler} value={itemProps.name} />
            </label>
            <div>
                <label>
                    <p>Qty.</p>
                    <input name='quantity' type='number' onChange={stateHandler} value={itemProps.quantity} />
                </label>
                <label>
                    <p>Price</p>
                    <input name='price' type='number' onChange={stateHandler} value={itemProps.price} />
                </label>
                <label>
                    <p>Total</p>
                    <div>
                        <span>{itemProps.total}</span>
                        <RemoveIco onClick={()=>deleteHandler(itemProps.id)} />
                    </div>
                </label>
            </div>
        </StyledItem>
    )
}

export default React.memo(Item)
