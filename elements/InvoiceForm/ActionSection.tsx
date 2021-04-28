import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/duck'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { addInvoice, setInvoiceFormVisible } from '../../redux/duck/app'
import { IdGenerator } from './utility'

const StyledSection= styled.section(({theme:{media:{ tablet, desktop }}})=>`
    background: var(--bg-color);
    position: absolute !important;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    padding: 20px 0px;
    box-shadow: 0px -20px 25px rgba(0,0,0,.08);
    & button{
        margin: 15px auto;
        
    }
    & > div{
        display: flex;
    }
    ${tablet}{
        padding: 30px;
        max-width: 700px;
        bottom: 0px;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-right-radius: 15px;
        & > button{
            margin: 0px;
        }
        & > div{
            & > button{
                margin: 0px 25px;
            }
        }
    }
    ${desktop}{
        padding-left: 155px;
        max-width: 900px;
    }
`)


const ActionSection:React.FC = () => {
    const editCase = useSelector((state:AppState)=>state.app.InvoiceFormEditCase)
    const invoiceForm = useSelector((state:AppState)=>state.invoiceForm)
    const dispatch = useDispatch()
    const closeForm = ()=>{
        dispatch(setInvoiceFormVisible({visibleBoolean: false}))
        return null
    }
    const addInvoiceToRedux = ()=>{
        let invoiceHelper = {...invoiceForm}
        invoiceHelper.id = IdGenerator()
        invoiceHelper.status = 'paid'
        dispatch(addInvoice(invoiceHelper))
    }

    return (
    <StyledSection>
        {!editCase && <SecondaryButton clickHandler={closeForm}>Discard</SecondaryButton>}
        <div>
            <SecondaryButton clickHandler={editCase ? closeForm : addInvoiceToRedux} case2={!editCase}>{editCase ? 'Cancel' : 'Save as Draft'}</SecondaryButton>
            <PrimaryButton clickHandler={addInvoiceToRedux} content='Save & Send' />
        </div>
    </StyledSection>
    )
}

export default ActionSection