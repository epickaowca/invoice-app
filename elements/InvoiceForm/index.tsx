import { CSSProperties, useState, useCallback } from 'react'
import styled from 'styled-components'
import ArrowLeft from '../../public/assets/icon-arrow-left.svg'
import ItemList from './ListOfItems'
import { useSelector, useDispatch } from 'react-redux'
import { setInvoiceFormVisible } from '../../redux/duck/app'
import { AppState } from '../../redux/duck'
import BillFrom from './BillFrom'
import BillTo from './BillTo'
import { useEffect } from 'react'
import { defaultFormState } from './utility'
import { changeState } from '../../redux/duck/invoiceForm'
import ActionSection from './ActionSection'

const Wrapper = styled.section(({theme:{media:{ tablet, desktop },colors:{ cornflower_blue, lavender }}})=>`
    display: var(--display-case);
    left: 0px;    
    position: absolute;
    background: var(--bg-color);
    z-index: 4;
    top: 70px;
    width: 100%;
    padding: 25px;
    padding-top: 40px;
    padding-bottom: 270px; 
    
    & input, & select{
        color: var(--h1-color);
        background: var(--input-color);
        border: 1px solid var(--input--border-color);
        border-radius: 5px;
        padding: 15px;
        font-weight: 600;
        font-size: 1rem;
        width: 100%;
    }
    & label{
        margin: 15px 0px;
        display: block;
        & p{
            color: ${cornflower_blue};
            font-size: .9rem;
        }
    }
    & > div{
        &:nth-child(1){
            color: var(--h1-color);
            position: relative;
            z-index: 3;
            cursor: pointer;
            display: flex;
            align-items: center;
            & > svg{
                margin-right: 15px;
            }
        }
    }
    & > h1{
        color: var(--h1-color);
        margin-top: 25px;
        position: relative;
        z-index: 3;
    }
    & > section{
        &:nth-child(3){
            &::-webkit-scrollbar{
                width: 12px;
            }
            &::-webkit-scrollbar-thumb{
                background: ${lavender};
                border-radius: 6px;
            }
        }
    }
    ${tablet}{
        height: 100vh; 
        max-height: 1500px; 
        max-width: 700px;
        top: 0px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        padding-top: 135px;
        padding-bottom: 200px;
        & > h1{
            font-size: 2rem;
            margin-left: 20px;
            margin-bottom: 20px;
        }
        & > div{
            &:nth-child(1){
                display: none;
            }
        }
        & > section{
            position: relative;
            z-index: 3;
            &:nth-child(3){
                padding: 0px 20px;
                padding-bottom: 40px;
                max-height: 100%;
                overflow-y: auto;
            }
        }
    }
    ${desktop}{
        padding-top: 35px;
        top: 0px;
        padding-left: 120px;
        max-width: 900px;
    }
`)




const MaskDiv = styled.div`
    cursor: pointer;
    display: var(--display-case);
    z-index: 2;
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(0,0,0,.6);
`


interface WrapperInterface extends CSSProperties {
    '--bg-color': string
    '--h1-color': string
    '--input-color': string
    '--input--border-color': string
    '--display-case': string
}


const InvoiceForm:React.FC = () => {        
    const dispatch = useDispatch()

    const allInvoices = useSelector((state:AppState)=>state.app.invoiceList)
    const editing_invoice_ID = useSelector((state:AppState)=>state.app.editingInvoiceID) 
    const editCase = useSelector((state:AppState)=>state.app.InvoiceFormEditCase)
    const darkMode = useSelector((state:AppState)=>state.app.darkMode)
    const showInvoiceForm = useSelector((state:AppState)=>state.app.showInvoiceForm)

    const invoiceID = useSelector((state:AppState)=>state.invoiceForm.id)

    const stylesForWrapper = WrapperStylesFunction(darkMode, showInvoiceForm)
    
    const { displayStyle, bgColor, h1Color, inputColor, inputBorderColor} = stylesForWrapper

    const wrapperStyles = {'--display-case': displayStyle,'--bg-color': bgColor, '--h1-color': h1Color, '--input-color': inputColor, '--input--border-color': inputBorderColor}

    useEffect(() => {
        if(editCase){
            const invoice = (allInvoices as any).find(elem=>elem.id === editing_invoice_ID)
            dispatch(changeState({fullState: invoice}))
        }else{
            dispatch(changeState({fullState: defaultFormState}))
        }
    }, [editCase])

    const closeForm = ()=>{
        dispatch(setInvoiceFormVisible({visibleBoolean: false}))
        return null
    }

    return (
        <>
            <Wrapper style={wrapperStyles as WrapperInterface}>
                <div onClick={()=>dispatch(setInvoiceFormVisible({visibleBoolean: false}))}>
                    <ArrowLeft />
                    <p>Go back</p>
                </div>
                <h1>{editCase ? `Edit #${invoiceID}`: 'New Invoice'}</h1>
                <section>
                    <BillFrom />
                    <BillTo />
                    <ItemList />
                </section>
                <ActionSection />
            </Wrapper>
            <MaskDiv style={{'--display-case': displayStyle} as WrapperInterface} onClick={closeForm} />
        </>
    )
}



const WrapperStylesFunction = (darkMode, showInvoiceForm)=>{
    const res = {
        bgColor: darkMode ? '#141625' : 'white',
        h1Color: darkMode ? 'white' : 'black',
        inputColor: darkMode ? '#1E2139' : 'white',
        inputBorderColor: darkMode ? '#252945' : '#DFE3FA',
        displayStyle: showInvoiceForm ? 'block' : 'none',
    }
    return res
}




export default InvoiceForm
