import { defaultFormState } from '../../elements/InvoiceForm/utility'

export const CHANGE_STATE = 'invoiceForm/change_state'
export const ADD_ITEM = 'invoiceForm/add_item'
export const UPDATE_ITEM = 'invoiceForm/update_item'
export const DELETE_ITEM = 'invoiceForm/delete_item'

export type appStateInterface = typeof defaultFormState

const initialState:appStateInterface = defaultFormState

const reducer = (state = initialState, action:ActionTypes)=>{
    switch(action.type){
        case CHANGE_STATE:{
            const { name, value, fullState } = action.payload
            if(name && (name[0] === 'createdAt' || name[0] === 'paymentTerms')){
                const inputDate = name[0] === 'createdAt' ? value : state.createdAt
                const terms = name[0] === 'paymentTerms' ? value : state.paymentTerms 
                const paymentDue = addDays(inputDate, +terms)
                return {
                    ...state,
                    [name[0]]: value,
                    paymentDue: paymentDue
                }
            }else{
                if(fullState){
                    return fullState
                }else if(name[1]){
                    return{
                        ...state,
                        [name[1]]: {...state[name[1]], [name[0]]: value}
                    }
                }else{
                    return {
                        ...state,
                        [name[0]]: value
                    }
                }
            }
        }
        case UPDATE_ITEM:{
            const { id, name, value, change_sum } = action.payload
            return{
                ...state,
                items: state.items.map(elem=>{
                    if(elem.id===id){
                        let updatedElem = {...elem}
                        updatedElem[name] = value
                        if(change_sum){
                            updatedElem.total = (updatedElem.quantity*updatedElem.price).toFixed(2)
                        }
                        return updatedElem
                    }else{
                        return elem
                    }
                })
            }
        }
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload]}
        case DELETE_ITEM:{
            return {...state, items: state.items.filter(elem=>elem.id !== action.id)}
        }
        default: return state
    }
}

type ChangePayloadType = {name?: [string, string?], value?: any, fullState?: typeof defaultFormState}
type UpdateItemPayloadType = {id: string, name: string, value: string | number, change_sum?: boolean}



export type ChangeType = {type: typeof CHANGE_STATE, payload: ChangePayloadType }
export type ChangeItemsType = {type: typeof ADD_ITEM, payload: typeof defaultFormState.items[0] }
export type UpdateItemType = {type: typeof UPDATE_ITEM, payload: UpdateItemPayloadType}
export type DeleteItemType = {type: typeof DELETE_ITEM, id: string}


export const changeState = (payload:ChangePayloadType):ActionTypes=>({type: CHANGE_STATE, payload})
export const addItem = (payload:typeof defaultFormState.items[0]):ActionTypes=>({type: ADD_ITEM, payload})
export const updateItem = (payload:UpdateItemPayloadType):ActionTypes=>({type: UPDATE_ITEM, payload})
export const deleteItem = (id:string):ActionTypes=>({type: DELETE_ITEM, id})

export type ActionTypes = ChangeType | ChangeItemsType | UpdateItemType | DeleteItemType

export default reducer



function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    const resultInFormat = result.toISOString().slice(0, 10)
    return resultInFormat;
}