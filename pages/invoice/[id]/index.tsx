import React from 'react'
import Header from '../../../elements/Header'
import InvoiceForm from '../../../elements/InvoiceForm'
import GlobalStyle from '../../../elements/GlobalStyle'
import GoBack from '../../../elements/GoBack'
import Actions from '../../../components/invoice/Actions'
import TopBar from '../../../components/invoice/TopBar'
import InvoiceInfo from '../../../components/invoice/InvoiceInfo'

const Invoice = () => {
    return (
        <GlobalStyle>
            <Header />
            <InvoiceForm />
            <section>
                <GoBack />
                <TopBar />
                <InvoiceInfo />
            </section>
            <Actions />
        </GlobalStyle>
    )
}

export default Invoice
