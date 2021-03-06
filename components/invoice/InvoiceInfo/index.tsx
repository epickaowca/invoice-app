import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/duck'
import { defaultFormState } from '../../../elements/InvoiceForm/utility'

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
    border-radius: 7px;
    background: var(--bg-color);
    padding: 25px;
    margin-top: 25px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.07);
    & p {
        color: var(--p-color);
    }
    ${p=>p.theme.media.desktop}{
        padding: 45px;
    }
`

const TopSection = styled.section`
    display: flex;
    flex-direction: column;
    & > div{
        & > p{
            opacity: .7;
        }
        &:nth-child(1){
            margin-bottom: 25px;
        }
    }
    ${p=>p.theme.media.tablet}{
        flex-direction: row;
        justify-content: space-between;
        & > div{
            & > h1{
                margin-bottom: 15px;
            }
        }
    }
`
const MiddleSection = styled.section`
    margin: 25px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div{
        margin: 25px 5px;
        &  h1{
            margin: 12px 0px;
        }
        &:nth-child(1){
            display: flex;
            flex-direction: column;
            justify-content: space-between
        }
    }
    ${p=>p.theme.media.tablet}{
        justify-content: flex-start;
        & > div{
            margin: 25px 0px;
            &:nth-child(2){
                margin: 25px 100px;
            }
        }
    }
`
const BottomSection = styled.section`
& > section{
    &:nth-child(1){
        background: var(--itemList-bg-color);
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        & > div{
            &:nth-child(1){
                display: none;
            }
        }
        }
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px;
            background: var(--total-bg-color);
            color: white;
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
            & > p{
                color: white;
            }
            & > h1{
                font-size: 1.2rem;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > section{
            &:nth-child(1){
                padding: 25px;
                & > div{
                    &:nth-child(1){
                        display: flex;
                        padding: 15px;
                        & > p{
                            flex: 2;
                        }
                        & > div{
                            flex: 3;
                            display: flex;
                            justify-content: space-between;
                            & > p{
                                &:nth-child(2){
                                    width: 65px;
                                }
                            }
                        }
                    }
                }
            }
            &:nth-child(2){
                padding: 35px;
                & > h1{
                    font-size: 2rem;
                }
            }
        }
    }
`

interface RFInterface {
    id: string
}


const InvoiceInfo:React.FC<RFInterface> = ({id}) => {
    const stateInvoice = useSelector((state:AppState) => state.app.invoiceList.find(elem=>elem.id === id))
    const {id:invoiceId,
        description, 
        senderAddress: { street:streetS, city:cityS, postCode: postCodeS, country: countryS },
        createdAt,
        paymentDue,
        clientName,
        clientAddress: {street, city, postCode, country},
        clientEmail,
        total

    } = stateInvoice ? stateInvoice : defaultFormState
    return (
        <Wrapper>
            <TopSection>
                <div>
                    <h1>#{invoiceId}</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <p>{streetS}</p>
                    <p>{cityS}</p>
                    <p>{postCodeS}</p>
                    <p>{countryS}</p>
                </div>
            </TopSection>
            <MiddleSection>
                <div>
                    <div>
                        <p>Invoice Date</p>
                        <h1>{createdAt}</h1>
                    </div>
                    <div>
                        <p>Payment Due</p>
                        <h1>{paymentDue}</h1>
                    </div>
                </div>
                <div>
                    <p>Bill To</p>
                    <h1>{clientName}</h1>
                    <p>{street}</p>
                    <p>{city}</p>
                    <p>{postCode}</p>
                    <p>{country}</p>
                </div>
                <div>
                    <p>Sent to</p>
                    <h1>{clientEmail}</h1>
                </div>
            </MiddleSection>
            <BottomSection>
                <section>
                    <div>
                        <p>Item Name</p>
                        <div>
                            <p>QTY.</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>
                    </div>
                    <ItemList id={id} />
                </section>
                <section>
                    <p>Grand Total</p>
                    <h1>?? {total.toFixed(2)}</h1>
                </section>
            </BottomSection>
        </Wrapper>
    )
}

export default React.memo(InvoiceInfo)
