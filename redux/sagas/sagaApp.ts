import * as types from '../duck/app'
import { call, put, takeEvery, takeLatest, StrictEffect} from 'redux-saga/effects'
import axios from 'axios'


//watcher
function* rootSaga(): Generator<StrictEffect>{
    yield takeEvery(types.LOAD_INITIAL_INVOICES, getInvoices)
}

//worker
function* getInvoices(){
    try{
        const invoices = yield call(fetchInvoices)
        yield put({ type: types.LOAD_INITIAL_INVOICES_SUCCES, payload: invoices})
    }catch(e){
        yield put({ type: types.LOAD_INITIAL_INVOICES_FAIL, payload: e.message})
    }
}

//function helper
const fetchInvoices =  async()=>{
    let invoicesFromStorage
    try {
        invoicesFromStorage = localStorage.getItem('invoiceList')
    } catch(err) {
        invoicesFromStorage = null
    }
    if(invoicesFromStorage  ){
        return invoicesFromStorage
    }else{
        return axios.get('/data.json')
        .then(res=>res.data)
        .catch(error=>{throw error})
    }
}









export default rootSaga