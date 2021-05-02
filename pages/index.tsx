import Header from '../elements/Header'
import TopPanel from '../components/home/TopPanel.tsx'
import Invoices from '../components/home/Invoices'
import { useDispatch, useSelector } from 'react-redux'
import { loadInitInvoices } from '../redux/duck/app'
import InvoiceForm from '../elements/InvoiceForm'
import GlobalStyle from '../elements/GlobalStyle'
import { AppState } from '../redux/duck'

const Home:React.FC = ()=> {
  const dispatch = useDispatch()
  const invoiceList = useSelector((state:AppState)=>state.app.invoiceList)
  if(!invoiceList.length){
    dispatch(loadInitInvoices())
  }
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