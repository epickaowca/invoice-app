import { useSelector } from 'react-redux'
import { AppState } from '../../redux/duck'
import { CSSProperties } from 'react'
import styled from 'styled-components'
import InvoiceStatus from '../../elements/InvoiceStatus'
import Link from 'next/link'
import IcoArrow from '../../public/assets/icon-arrow-right.svg'

interface StyledInterface extends CSSProperties {
    '--color-darkmode': string
    '--bg-color-darkmode': string
}

const Wrapper = styled.div(({theme: {media:{ tablet },colors: {blue}}})=>`
    color: var(--color-darkmode);
    background: var(--bg-color-darkmode);
    width: 90%;
    margin: 15px auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    box-shadow: 0px 0px 7px rgba(0,0,0,.07);
    max-width: 400px;
    cursor: pointer;
    &:hover{
        border: 1px solid ${blue};
    }
    & > div{
        &:nth-child(1){
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            & > p{
                &:nth-child(1){
                    font-weight: 700;
                }
                &:nth-child(2){
                    opacity: .7;
                    font-size: .9rem;
                }
            }
        }
    }
    ${tablet}{
        padding: 25px 0px;
        flex-direction: row;
        width: 100%;
        max-width: unset;
        align-items: center;
        justify-content: space-between;
        & > div{
            &:nth-child(1){
                justify-content: space-around;
                margin: unset;
                flex: 1;
            }
        }
    }
`)

const StyledDiv = styled.div(({theme: {media: {tablet, desktop}}})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    & > div{
        &:nth-child(1){
            display: flex;
            flex-direction: column;
            & > p{
                &:nth-child(1){
                    font-size: .9rem;
                    opacity: .7;
                    margin-bottom: 5px;
                }
                &:nth-child(2){
                    font-weight: 700;
                }
            }
        }
        &:nth-child(2){
            & > svg{
                display: none;
            }
        }
    }
    ${tablet}{
        justify-content: space-around;
        flex: 2;
      
        & > div{
            &:nth-child(1){
                flex-direction: row;
                width: 45%;
                justify-content: space-between;
                & > p{
                    &:nth-child(1){
                        margin: unset;
                    }
                }
            }
            &:nth-child(2){
                display: flex;
                align-items: center;
                & > div{
                    margin-right: 15px;
                }
                & > svg{
                    display: block;
                }
            }
        }
    }
    ${desktop}{
        & > div{
            &:nth-child(1){
                width: 50%;
                & > p{
                    &:nth-child(2){
                        font-size: 1.5rem;
                    }
                }
            }
            &:nth-child(2){
                & > div{
                    margin-right: 25px;
                }
            }
        }
    }
`)

const InvoiceItem:React.FC = () => {
    const darkMode = useSelector((state: AppState)=> state.app.darkMode)
    const colorStyle = darkMode ? 'white' : 'black'
    const bgColorStyle = darkMode ? '#1E2139' : 'white'
    return (
        <Link href="#">
            <Wrapper style={{ '--color-darkmode': colorStyle, '--bg-color-darkmode': bgColorStyle } as StyledInterface}>
                <div>
                    <p>#RT3080</p>
                    <p>Jensen Huang</p>
                </div>
                <StyledDiv>
                    <div>
                        <p>Due 19 Aug 2021</p>
                        <p>£ 1,800.90</p>
                    </div>
                    <div>
                        <InvoiceStatus status='paid' />
                        <IcoArrow />
                    </div>
                </StyledDiv>
            </Wrapper>
        </Link>
    )
}

export default InvoiceItem
