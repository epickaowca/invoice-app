export const DARK_MODE = 'app/dark_mode'
export const SHOW_INVOICE_FORM = 'app/show_invoice_form'
export const LOAD_DATA = 'app/load_data'
export const ADD_INVOICE = 'app/add_item'
export const UPDATE_INVOICE = 'app/update_invoice'

import { defaultFormState } from '../../elements/InvoiceForm/utility'
import { UpdateItemType } from './invoiceForm'

export interface appStateInterface{
    readonly darkMode: boolean
    readonly showInvoiceForm: boolean
    readonly InvoiceFormEditCase: boolean
    readonly editingInvoiceID: string
    readonly invoiceList: typeof defaultFormState[]
}

const initialState:appStateInterface={
    darkMode: false,
    showInvoiceForm: false,
    InvoiceFormEditCase: false,
    editingInvoiceID: '',
    invoiceList: [],
}

const reducer = (state = initialState, action:ActionTypes)=>{
    switch(action.type){
        case DARK_MODE:
            return{
                ...state,
                darkMode: !state.darkMode
            }
        case ADD_INVOICE:
                return{
                    ...state,
                    invoiceList: [...state.invoiceList, action.payload]
                }
        case UPDATE_INVOICE:{
            const { id, value } = action.payload
            return{
                ...state,
                invoiceList: state.invoiceList.map(elem=>elem.id === id ? value : elem)
            }
        }
        case SHOW_INVOICE_FORM:{
            const { editCase, visibleBoolean, editId } = action.payload
            return{
                ...state,
                showInvoiceForm: visibleBoolean,
                InvoiceFormEditCase: ('editCase' in action.payload) ? editCase : state.InvoiceFormEditCase,
                editingInvoiceID: editId ? editId : state.editingInvoiceID
            }
        }
        case LOAD_DATA:
            return{
                ...state,
                invoiceList: action.payload
            }
        default: return state
    }
}

type InvoiceFormTypeHelper = {visibleBoolean: boolean, editCase?: boolean, editId?:{}}


export type DarkModeType = {type: typeof DARK_MODE}
export type ShowInvoiceFormType = {type: typeof SHOW_INVOICE_FORM, payload: InvoiceFormTypeHelper}
export type LoadDataType = {type: typeof LOAD_DATA, payload: typeof defaultFormState[][]}
export type AddInvoiceType = {type: typeof ADD_INVOICE, payload: typeof defaultFormState}
export type UpdateInvoiceType = {type: typeof UPDATE_INVOICE, payload: {id:string, value:typeof defaultFormState}}


export const setDarkMode = ():ActionTypes=>({type:DARK_MODE})
export const setInvoiceFormVisible = (payload:InvoiceFormTypeHelper):ActionTypes=>({type:SHOW_INVOICE_FORM, payload})
export const loadData = (payload:typeof defaultFormState[][]):ActionTypes=>({type:LOAD_DATA, payload})
export const addInvoice = (payload:typeof defaultFormState):ActionTypes=>({type:ADD_INVOICE, payload})
export const updateInvoice = (payload:{id:string, value:typeof defaultFormState}):ActionTypes=>({type:UPDATE_INVOICE, payload})


export type ActionTypes = DarkModeType | ShowInvoiceFormType | LoadDataType | AddInvoiceType | UpdateInvoiceType

export default reducer