import * as types from '../duck/app'
import { call, put, takeEvery, takeLatest, StrictEffect, select} from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../duck'


function* rootSaga(): Generator<StrictEffect>{
    yield takeEvery(types.ADD_INVOICE, saveToLocalStorage)
    yield takeEvery(types.UPDATE_INVOICE, saveToLocalStorage)
    yield takeEvery(types.LOAD_INITIAL_INVOICES, getInvoices)
}

function* saveToLocalStorage(){
    const invoices =  yield select((state:AppState)=>state.app.invoiceList)
    try{
        localStorage.setItem('invoiceList', JSON.stringify(invoices));
    }catch(e){
        throw e
    }
}

function* getInvoices(){
    try{
        const invoices = yield call(fetchInvoices)
        yield put({ type: types.LOAD_INITIAL_INVOICES_SUCCES, payload: invoices})
    }catch(e){
        yield put({ type: types.LOAD_INITIAL_INVOICES_FAIL, payload: e.message})
    }
}


const fetchInvoices =  async()=>{
    let invoicesFromStorage
    try {
        invoicesFromStorage = localStorage.getItem('invoiceList')
    } catch(err) {
        invoicesFromStorage = null
    }
    if(invoicesFromStorage  ){
        return JSON.parse(invoicesFromStorage)
    }else{
        return axios.get('/data.json')
        .then(res=>res.data)
        .catch(error=>{throw error})
    }
}









export default rootSaga