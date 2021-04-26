import styled from 'styled-components'
import {formCss} from './utility'
import { defaultFormState } from './utility'
import {ChangeEvent} from 'react'

const Wrapper = styled.div`
    ${formCss}
    ${p=>p.theme.media.tablet}{
        margin-top: 20px;
    }
`

export interface FCInterface {
    props: typeof defaultFormState
    updateFormState: (name: any, value: any, container?: any) => void
}

const BillFrom:React.FC<FCInterface> = ({props, updateFormState}) => {
    const inputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        updateFormState(e.target.name, e.target.value, 'senderAddress')
    }
    const { street, city, postCode, country } = props.senderAddress
    return (
        <Wrapper>
        <span>Bill From</span>
        <label>
            <p>Street Address</p>
            <input onChange={inputHandler} name="street" value={street} type='text' />
        </label>
        <div>
            <div>
                <label>
                    <p>City</p>
                    <input onChange={inputHandler} name="city" value={city} type='text' />
                </label>
                <label>
                    <p>Post Code</p>
                    <input onChange={inputHandler} name="postCode" value={postCode} type='text' />
                </label>
            </div>
            <label>
                <p>Country</p>
                <input onChange={inputHandler} name="country" value={country} type="text" />
            </label>
        </div>
    </Wrapper>
    )
}

export default BillFrom
