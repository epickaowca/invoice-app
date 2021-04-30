import React from 'react'
import Actions from './Actions'
import InvoiceStatus from '../../elements/InvoiceStatus'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/duck'
import app from 'next/app'

const Wrapper = styled.div`
    width: 90%;
    background: white;
    padding: 25px;
    margin: auto;
    margin-top: 15px;
    border-radius: 7px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.07);
    & > div{
        &:nth-child(1){
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > h2{
                font-weight: 400;
                font-size: 1rem;
                opacity: .7;
            }
        }
        &:nth-child(2){
            display: none;
        }
    }
    ${p=>p.theme.media.tablet}{
        display: flex;
        justify-content: space-between;
        & > div{
            &:nth-child(1){
                width: 100%;
                max-width: 220px;
            }
            &:nth-child(2){
                max-width: 370px;
                width: 100%;
                display: flex;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        margin-top: 0px;
        & > div{
            &:nth-child(2){
                max-width: 420px;
            }
        }
    }
`

interface RFInterface {
    id: string
}

const TopBar:React.FC<RFInterface> = ({id}) => {
    return (
        <Wrapper>
            <div>
                <h2>Status</h2>
                <InvoiceStatus status='pending' />
            </div>
            <Actions id={id} />
        </Wrapper>
    )
}

export default TopBar
