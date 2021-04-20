export const DARK_MODE = 'app/dark_mode'

export interface appStateInterface{
    readonly darkMode: boolean
}

const initialState:appStateInterface={
    darkMode: false,
}

const reducer = (state = initialState, action:ActionTypes)=>{
    switch(action.type){
        case DARK_MODE:
            return{
                ...state,
                darkMode: action.payload
            }
        default: return state
    }
}

export type DarkModeType = {type: typeof DARK_MODE, payload: boolean}



export const setDarkMode = (payload:boolean):ActionTypes=>({type:DARK_MODE, payload})




export type ActionTypes = DarkModeType
export default reducer