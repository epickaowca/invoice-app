import { CSSProperties, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import TopPanel from '../components/TopPanel.tsx'
import Invoices from '../components/Invoices'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../redux/duck/app'
import { AppState } from '../redux/duck/index'
import InvoiceForm from '../elements/InvoiceForm'
import axios from 'axios'

interface CssVariables extends CSSProperties{
  '--bg-color': string
}

const Wrapper = styled.div`
  background: var(--bg-color);
  min-height: 100vh;
`

let alreadyDone = false

const Home:React.FC = ()=> {
  const darkMode = useSelector((state:AppState)=>state.app.darkMode);
  const bgColor = !darkMode ? '#F8F8FB' : '#141625'
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
    <Wrapper style={{'--bg-color': bgColor} as CssVariables}>
      <Header />
      <TopPanel />
      <Invoices />
      <InvoiceForm />
    </Wrapper>
  )
}

export default Home