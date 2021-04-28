export const DARK_MODE = 'app/dark_mode'
export const SHOW_INVOICE_FORM = 'app/show_invoice_form'
export const LOAD_DATA = 'app/load_data'

import { defaultFormState } from '../../elements/InvoiceForm/utility'

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


export const setDarkMode = ():ActionTypes=>({type:DARK_MODE})

export const setInvoiceFormVisible = (payload:InvoiceFormTypeHelper):ActionTypes=>({type:SHOW_INVOICE_FORM, payload})

export const loadData = (payload:typeof defaultFormState[][]):ActionTypes=>({type:LOAD_DATA, payload})



export type ActionTypes = DarkModeType | ShowInvoiceFormType | LoadDataType

export default reducer