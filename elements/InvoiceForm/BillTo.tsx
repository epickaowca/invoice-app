import styled from 'styled-components'
import { formCss } from './utility'
import { FCInterface } from './BillFrom'
import {ChangeEvent} from 'react'

const Wrapper = styled.div`
    ${formCss}
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(6){
                & > label{
                    margin: 0px;
                    &:nth-child(1){
                        margin-right: 25px;
                    }
                    & > select, & > input{
                        height: 55px;
                    }
                }
            }
        }
    }
`


const BillTo:React.FC<FCInterface> = ({updateFormState, props}) => {
    const inputHandler = (e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>, box?:string)=>{
        updateFormState(e.target.name, e.target.value, box)
    }
    return (
        <Wrapper>
            <span>Bill To</span>
            <label>
                <p>Client'name</p>
                <input onChange={inputHandler} name="clientName" value={props.clientName} type='text' />
            </label>
            <label>
                <p>Client'Email</p>
                <input onChange={inputHandler} name="clientEmail" value={props.clientEmail} type='email' />
            </label>
            <label>
                <p>Street Address</p>
                <input onChange={e=>inputHandler(e,'clientAddress')} name="street" value={props.clientAddress.street} type='text' />
            </label>
            <div>
                <div>
                    <label>
                        <p>City</p>
                        <input onChange={e=>inputHandler(e,'clientAddress')} name="city" value={props.clientAddress.city} type='text' />
                    </label>
                    <label>
                        <p>Post Code</p>
                        <input onChange={e=>inputHandler(e,'clientAddress')} name="postCode" value={props.clientAddress.postCode} type='text' />
                    </label>
                </div>
                <label>
                    <p>Country</p>
                    <input onChange={e=>inputHandler(e,'clientAddress')} name="country" value={props.clientAddress.country} type="text" />
                </label>
            </div>
            <div>
                <label>
                    <p>Invoice Date</p>
                    <input onChange={inputHandler} value={props.createdAt} name="createdAt" type='date' />
                </label>
                <label>
                    <p>Payment Terms</p>
                    <select onChange={inputHandler} name="paymentTerms">
                        <option value={3}>Next 3 Days</option>
                        <option value={7}>Next 7 Days</option>
                        <option value={14}>Next 14 Days</option>
                        <option value={30}>Next 30 Days</option>
                    </select>
                </label>
            </div>
            <label>
                <p>Project Description</p>
                <input onChange={inputHandler} name="description" value={props.description} type='text' />
            </label>
        </Wrapper>
    )
}

export default BillTo
