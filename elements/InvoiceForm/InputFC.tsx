import React, { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/duck'
import { changeState } from '../../redux/duck/invoiceForm'

interface InputFCInterface {
    name: string
    nestName?: string
    type?: string
}

const InputFC:React.FC<InputFCInterface> = ({name, nestName, type='text'}) => {
    const dispatch = useDispatch()
    let itemState
    if(nestName){
        itemState = useSelector((state:AppState)=>state.invoiceForm[nestName][name])
    }else{
        itemState = useSelector((state:AppState)=>state.invoiceForm[name])
    }
    return (
        <input onChange={e=>inputHandler(dispatch, e, nestName)} name={name} value={itemState} type={type} />
    )
}
    
export default React.memo(InputFC)
    
const inputHandler = (dispatch, e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>, box?:string)=>{
    dispatch(changeState({name: [e.target.name, box], value: e.target.value}))
}