import React from 'react'
import Header from '../../../elements/Header'
import InvoiceForm from '../../../elements/InvoiceForm'
import GlobalStyle from '../../../elements/GlobalStyle'
import GoBack from '../../../elements/GoBack'
import Actions from '../../../components/invoice/Actions'
import TopBar from '../../../components/invoice/TopBar'
import InvoiceInfo from '../../../components/invoice/InvoiceInfo'
import styled from 'styled-components'

const MainSection = styled.section`
    max-width: 450px;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 25px;
    & > div{
        &:nth-child(1){
            margin: 25px auto;
            width: 90%;
        }
    }
    ${p=>p.theme.media.tablet}{
        max-width: 1000px;
        padding-top: 15px;
        & > div{
            &:nth-child(1){
                margin: 35px auto;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1300px;
        padding-left: 100px;
    }
`


const Invoice = () => {
    return (
        <GlobalStyle>
            <Header />
            <InvoiceForm />
            <MainSection>
                <GoBack />
                <TopBar />
                <InvoiceInfo />
            </MainSection>
            {/* <Actions /> */}
        </GlobalStyle>
    )
}

export default Invoice
