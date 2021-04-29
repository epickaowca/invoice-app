import { useEffect } from 'react'
import Header from '../elements/Header'
import TopPanel from '../components/home/TopPanel.tsx'
import Invoices from '../components/home/Invoices'
import { useDispatch } from 'react-redux'
import { loadData } from '../redux/duck/app'
import InvoiceForm from '../elements/InvoiceForm'
import axios from 'axios'
import GlobalStyle from '../elements/GlobalStyle'

let alreadyDone = false

const Home:React.FC = ()=> {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const fetchFirstInvoices = async()=>{
      const res = await axios('/data.json')
      dispatch(loadData(res.data))
    }

    if(!alreadyDone){
      fetchFirstInvoices()
      alreadyDone = true
    }
  },[])
  return (
    <GlobalStyle>
      <Header />
      <TopPanel />
      <Invoices />
      <InvoiceForm />
    </GlobalStyle>
  )
}

export default Home