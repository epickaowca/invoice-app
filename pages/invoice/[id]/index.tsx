import React, { CSSProperties } from 'react'
import Header from '../../../elements/Header'
import InvoiceForm from '../../../elements/InvoiceForm'
import GlobalStyle from '../../../elements/GlobalStyle'
import GoBack from '../../../elements/GoBack'
import Actions from '../../../components/invoice/Actions'
import TopBar from '../../../components/invoice/TopBar'
import InvoiceInfo from '../../../components/invoice/InvoiceInfo'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/duck'
import { loadInitInvoices } from '../../../redux/duck/app'
import Link from 'next/link'

const MainSection = styled.section`
    color: var(--h1-color);
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

interface WrapperInterface extends CSSProperties {
    '--p-color': string
    '--bg-color': string
    '--h1-color': string
    '--itemList-bg-color': string
    '--total-bg-color': string
}

const Invoice:React.FC = () => {
    const invoices = useSelector((state:AppState)=>state.app.invoiceList)
    const darkMode = useSelector((state:AppState)=>state.app.darkMode)
    const dispatch = useDispatch()
    if(!invoices.length){
        dispatch(loadInitInvoices())    
    }
    const router = useRouter()
    const {id} = router.query
    const stylesForWrapper = WrapperStylesFunction(darkMode)
    const { pColor, bgColor, h1Color, itemListBgColor, totalBgColor } = stylesForWrapper
    const wrapperStyles = {'--p-color': pColor, '--bg-color': bgColor, '--h1-color': h1Color, '--itemList-bg-color': itemListBgColor, '--total-bg-color': totalBgColor}
    return (
        <GlobalStyle>
            <Header />
            <InvoiceForm />
            <MainSection style={wrapperStyles as WrapperInterface}>
                <Link href="/">
                    <div>
                        <GoBack />
                    </div>
                </Link>
                <TopBar id={id as string} />
                <InvoiceInfo id={id as string} />
            </MainSection>
            <Actions bottomCase id={id as string} />
        </GlobalStyle>
    )
}

export default Invoice



const WrapperStylesFunction = (darkMode)=>{
    const res = {
        pColor: darkMode ? '#DFE3FA' : '#7E88C3',
        bgColor: darkMode ? '#1E2139' : 'white',
        h1Color: darkMode ? 'white' : 'black',
        itemListBgColor: darkMode ? '#252945' : '#F9FAFE',
        totalBgColor: darkMode ? '#0C0E16' : '#373B53',
    }
    return res
}