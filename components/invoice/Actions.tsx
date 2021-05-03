import React, { CSSProperties } from 'react'
import PrimaryButton from '../../elements/PrimaryButton'
import SecondaryButton from '../../elements/SecondaryButton'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setInvoiceFormVisible, updateInvoice } from '../../redux/duck/app'
import { AppState } from '../../redux/duck'
import Link from 'next/link'

type WrapperType = {bottomCase: boolean} 

const Wrapper = styled.div<WrapperType>`
    background: var(--bg-color-actions);
    padding: 15px;
    & > div{
        margin: auto;
        max-width: 350px;
        display: flex;
        justify-content: space-between;
        & > button{
             font-size: .9rem;
        }
    }
    ${p=>p.theme.media.tablet}{
        ${p=>p.bottomCase && 'display: none'};
        & > div{
            max-width: unset;
            margin: unset;
            width: 100%;
            & > button{
                font-size: 1rem;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > div{
            & > button{
                font-size: 1.2rem;
            }
        }
    }
`

interface RFInterface {
    bottomCase?: boolean
    id: string
}

interface WrapperInterface extends CSSProperties {
    '--bg-color-actions': string
}
const Actions:React.FC<RFInterface> = ({bottomCase, id}) => {
    const stateInvoice = useSelector((state:AppState) => state.app.invoiceList.find(elem=>elem.id === id))
    const darkMode = useSelector((state:AppState) => state.app.darkMode)
    const bgColor = darkMode ? '#1E2139' : 'white'
    const dispatch = useDispatch()
    const markPaidHandler = ()=>{
        const stateInvoiceHelper = {...stateInvoice}
        stateInvoiceHelper.status = 'paid'
        dispatch(updateInvoice({id, value: stateInvoiceHelper}))
    }
    return (
        <Wrapper style={{'--bg-color-actions': bgColor} as WrapperInterface} bottomCase={bottomCase}>
            <div>
                <SecondaryButton clickHandler={()=>dispatch(setInvoiceFormVisible({visibleBoolean: true, editCase: true, editId: id}))}  >Edit</SecondaryButton>
                <Link href="/">
                    <div>
                        <PrimaryButton clickHandler={()=>dispatch(updateInvoice({id, removeCase: true}))} color='tomato' content='Delete' />
                    </div>
                </Link>
                <PrimaryButton clickHandler={markPaidHandler} content='Mark as Paid' />
            </div>
        </Wrapper>
    )
}

export default React.memo(Actions)
