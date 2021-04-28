import React from 'react'
import styled from 'styled-components'
import { formCss } from '../utility'
import InputFC from '../InputFC'
import SelectRF from './SelectRF'

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


const BillTo:React.FC = () => {
    return (
        <Wrapper>
            <span>Bill To</span>
            <label>
                <p>Client'name</p>
                <InputFC name='clientName' />
            </label>
            <label>
                <p>Client'Email</p>
                <InputFC name='clientEmail' />
            </label>
            <label>
                <p>Street Address</p>
                <InputFC name='street' nestName='clientAddress' />
            </label>
            <div>
                <div>
                    <label>
                        <p>City</p>
                        <InputFC name='city' nestName='clientAddress' />
                    </label>
                    <label>
                        <p>Post Code</p>
                        <InputFC name='postCode' nestName='clientAddress' />
                    </label>
                </div>
                <label>
                    <p>Country</p>
                    <InputFC name='country' nestName='clientAddress' />
                </label>
            </div>
            <div>
                <label>
                    <p>Invoice Date</p>
                    <InputFC type="date" name='createdAt' />
                </label>
                <label>
                    <p>Payment Terms</p>
                    <SelectRF />
                </label>
            </div>
            <label>
                <p>Project Description</p>
                <InputFC name='description' />
            </label>
        </Wrapper>
    )
}

export default BillTo
