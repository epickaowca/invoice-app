export const DARK_MODE = 'app/dark_mode'
export const SHOW_INVOICE_FORM = 'app/show_invoice_form'
export const ADD_INVOICE = 'app/add_item'
export const UPDATE_INVOICE = 'app/update_invoice'
export const LOAD_INITIAL_INVOICES = 'app/load_initial_invoices'
export const LOAD_INITIAL_INVOICES_SUCCES = 'app/load_initial_invoices_succes'
export const LOAD_INITIAL_INVOICES_FAIL = 'app/load_initial_invoices_fail'

import { defaultFormState } from '../../elements/InvoiceForm/utility'

export interface appStateInterface{
    readonly darkMode: boolean
    readonly showInvoiceForm: boolean
    readonly InvoiceFormEditCase: boolean
    readonly editingInvoiceID: string
    readonly invoiceList: typeof defaultFormState[]
    readonly invoiceListLoading: boolean,
    readonly invoiceListError: string,
}

const initialState:appStateInterface={
    darkMode: false,
    showInvoiceForm: false,
    InvoiceFormEditCase: false,
    editingInvoiceID: '',
    invoiceList: [],
    invoiceListLoading: false,
    invoiceListError: '',
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
                    invoiceList: [action.payload, ...state.invoiceList]
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
        case LOAD_INITIAL_INVOICES:
            return{
            ...state,
            invoiceListLoading: true
        }

        case LOAD_INITIAL_INVOICES_SUCCES:
            return{
            ...state,
            invoiceList: action.payload,
            invoiceListLoading: false,
            invoiceListError: ''
        }
        
        case LOAD_INITIAL_INVOICES_FAIL:
            return{
            ...state,
            invoiceListLoading: false,
            invoiceListError: action.payload
        }

        default: return state
    }
}

type InvoiceFormTypeHelper = {visibleBoolean: boolean, editCase?: boolean, editId?:{}}


export type DarkModeType = {type: typeof DARK_MODE}
export type ShowInvoiceFormType = {type: typeof SHOW_INVOICE_FORM, payload: InvoiceFormTypeHelper}
export type AddInvoiceType = {type: typeof ADD_INVOICE, payload: typeof defaultFormState}
export type UpdateInvoiceType = {type: typeof UPDATE_INVOICE, payload: {id:string, value:typeof defaultFormState}}
export type LoadInitInviocesType = {type: typeof LOAD_INITIAL_INVOICES}
export type LoadInitInviocesSuccesType = {type: typeof LOAD_INITIAL_INVOICES_SUCCES, payload: []}
export type LoadInitInviocesFailType = {type: typeof LOAD_INITIAL_INVOICES_FAIL, payload: string}


export const setDarkMode = ():ActionTypes=>({type:DARK_MODE})
export const setInvoiceFormVisible = (payload:InvoiceFormTypeHelper):ActionTypes=>({type:SHOW_INVOICE_FORM, payload})
export const addInvoice = (payload:typeof defaultFormState):ActionTypes=>({type:ADD_INVOICE, payload})
export const updateInvoice = (payload:{id:string, value:typeof defaultFormState}):ActionTypes=>({type:UPDATE_INVOICE, payload})
export const loadInitInvoices = ():ActionTypes=>({type:LOAD_INITIAL_INVOICES})


export type ActionTypes = DarkModeType | ShowInvoiceFormType | AddInvoiceType | UpdateInvoiceType | LoadInitInviocesType | LoadInitInviocesSuccesType | LoadInitInviocesFailType

export default reducer