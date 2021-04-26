export const DARK_MODE = 'app/dark_mode'
export const SHOW_INVOICE_FORM = 'app/show_invoice_form'


export interface appStateInterface{
    readonly darkMode: boolean
    readonly showInvoiceForm: boolean
}

const initialState:appStateInterface={
    darkMode: false,
    showInvoiceForm: false,
}

const reducer = (state = initialState, action:ActionTypes)=>{
    switch(action.type){
        case DARK_MODE:
            return{
                ...state,
                darkMode: !state.darkMode
            }
        case SHOW_INVOICE_FORM:{
            return{
                ...state,
                showInvoiceForm: action.visibleBoolean
            }
        }
        default: return state
    }
}

export type DarkModeType = {type: typeof DARK_MODE}
export type ShowInvoiceFormType = {type: typeof SHOW_INVOICE_FORM, visibleBoolean: boolean}



export const setDarkMode = ():ActionTypes=>({type:DARK_MODE})

export const setInvoiceFormVisible = (visibleBoolean:boolean):ActionTypes=>({type:SHOW_INVOICE_FORM, visibleBoolean})




export type ActionTypes = DarkModeType | ShowInvoiceFormType

export default reducer