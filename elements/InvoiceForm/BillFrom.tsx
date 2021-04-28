import React from 'react'
import styled from 'styled-components'
import {formCss} from './utility'
import InputFC from './InputFC'

const Wrapper = styled.div`
    ${formCss}
    ${p=>p.theme.media.tablet}{
        margin-top: 20px;
    }
`


const BillFrom:React.FC = () => {
    return (
        <Wrapper>
        <span>Bill From</span>
        <label>
            <p>Street Address</p>
            <InputFC name='street' nestName='senderAddress' />
        </label>
        <div>
            <div>
                <label>
                    <p>City</p>
                    <InputFC name='city' nestName='senderAddress' />
                </label>
                <label>
                    <p>Post Code</p>
                    <InputFC name='postCode' nestName='senderAddress' />
                </label>
            </div>
            <label>
                <p>Country</p>
                <InputFC name='country' nestName='senderAddress' />
            </label>
        </div>
    </Wrapper>
    )
}

export default BillFrom
