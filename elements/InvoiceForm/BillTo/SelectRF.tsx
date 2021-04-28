import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/duck'
import { changeState } from '../../../redux/duck/invoiceForm'

const SelectRF = () => {
    const paymentTerms = useSelector((state:AppState)=>state.invoiceForm.paymentTerms)
    const dispatch = useDispatch()
    return (
        <select value={paymentTerms} onChange={e=>dispatch(changeState({name: [e.target.name], value: e.target.value}))} name="paymentTerms">
            <option value={3}>Next 3 Days</option>
            <option value={7}>Next 7 Days</option>
            <option value={14}>Next 14 Days</option>
            <option value={30}>Next 30 Days</option>
        </select>
    )
}

export default SelectRF
