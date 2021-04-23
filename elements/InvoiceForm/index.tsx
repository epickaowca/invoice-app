import { CSSProperties } from 'react'
import styled from 'styled-components'
import ArrowLeft from '../../public/assets/icon-arrow-left.svg'
import ItemList from './ListOfItems'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import { formCss } from './stylesUtility'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/duck'

const Wrapper = styled.section`
    left: 0px;    
    position: absolute;
    background: var(--bg-color);
    z-index: 4;
    top: 70px;
    width: 100%;
    padding: 25px;
    padding-top: 40px;
    padding-bottom: 270px;
    & input, & select{
        color: var(--h1-color);
        background: var(--input-color);
        border: 1px solid var(--input--border-color);
        border-radius: 5px;
        padding: 15px;
        font-weight: 600;
        font-size: 1rem;
        width: 100%;
    }
    & label{
        margin: 15px 0px;
        display: block;
        & p{
            color: ${p=>p.theme.colors.cornflower_blue};
            font-size: .9rem;
        }
    }
    & > div{
        &:nth-child(1){
            cursor: pointer;
            display: flex;
            align-items: center;
            & > svg{
                margin-right: 15px;
            }
        }
    }
    & > h1{
        color: var(--h1-color);
        margin-top: 25px;
    }
    ${p=>p.theme.media.tablet}{
        height: 100vh; 
        max-height: 1400px; 
        max-width: 700px;
        top: 0px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        padding-top: 135px;
        padding-bottom: 200px;
        & > h1{
            font-size: 2rem;
            margin-left: 20px;
            margin-bottom: 20px;
        }
        & > div{
            &:nth-child(1){
                display: none;
            }
        }
        & > form{
            padding: 0px 20px;
            padding-bottom: 40px;
            max-height: 100%;
            overflow-y: auto;
        }
    }
    ${p=>p.theme.media.desktop}{
        padding-top: 35px;
        top: 0px;
        padding-left: 120px;
        max-width: 900px;
    }
`

const BillFrom = styled.div`
    ${formCss}
    ${p=>p.theme.media.tablet}{
        margin-top: 20px;
    }
`

const BillTo = styled.div`
    ${formCss}
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(6){
                & > label{
                    margin: 0px;
                    &:nth-child(1){
                        margin-right: 25px;
                    }
                    & > select, & > input{
                        height: 55px;
                    }
                }
            }
        }
    }
`

const ActionSection = styled.section`
    background: var(--bg-color);
    position: absolute;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    padding: 20px 0px;
    box-shadow: 0px -20px 25px rgba(0,0,0,.08);
    & button{
        margin: 15px auto;
    }
    & > div{
        display: flex;
    }
    ${p=>p.theme.media.tablet}{
        padding: 30px;
        position: absolute;
        max-width: 700px;
        bottom: 0px;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-right-radius: 15px;
        & > button{
            margin: 0px;
        }
        & > div{
            & > button{
                margin: 0px 25px;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        padding-left: 155px;
        max-width: 900px;
    }
`

interface WrapperInterface extends CSSProperties {
    '--bg-color': string
    '--h1-color': string
    '--input-color': string
    '--input--border-color': string
}

const InvoiceForm:React.FC = () => {
    const darkMode = useSelector((state:AppState)=>state.app.darkMode)
    const bgColor = darkMode ? '#141625' : 'white'
    const h1Color = darkMode ? 'white' : 'black'
    const inputColor = darkMode ? '#1E2139' : 'white'
    const inputBorderColor = darkMode ? '#252945' : '#DFE3FA'
    const wrapperStyles = {'--bg-color': bgColor, '--h1-color': h1Color, '--input-color': inputColor, '--input--border-color': inputBorderColor}
    return (
        <Wrapper style={wrapperStyles as WrapperInterface}>
            <div>
                <ArrowLeft />
                <p>Go back</p>
            </div>
            <h1>New Invoice</h1>
            <form>
                <BillFrom>
                    <span>Bill From</span>
                    <label>
                        <p>Street Address</p>
                        <input type='text' />
                    </label>
                    <div>
                        <div>
                            <label>
                                <p>City</p>
                                <input type='text' />
                            </label>
                            <label>
                                <p>Post Code</p>
                                <input type='text' />
                            </label>
                        </div>
                        <label>
                            <p>Country</p>
                            <input type="text" />
                        </label>
                    </div>
                </BillFrom>
                <BillTo>
                    <span>Bill To</span>
                    <label>
                        <p>Client'name</p>
                        <input type='text' />
                    </label>
                    <label>
                        <p>Client'Email</p>
                        <input type='email' />
                    </label>
                    <label>
                        <p>Street Address</p>
                        <input type='text' />
                    </label>
                    <div>
                        <div>
                            <label>
                                <p>City</p>
                                <input type='text' />
                            </label>
                            <label>
                                <p>Post Code</p>
                                <input type='text' />
                            </label>
                        </div>
                        <label>
                            <p>Country</p>
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Invoice Date</p>
                            <input type='date' />
                        </label>
                        <label>
                            <p>Payment Terms</p>
                            <select>
                                <option>Now</option>
                                <option>Next 3 Days</option>
                                <option>Next 7 Days</option>
                                <option>Next 14 Days</option>
                                <option>Next 30 Days</option>
                            </select>
                        </label>
                    </div>
                    <label>
                        <p>Project Description</p>
                        <input type='text' />
                    </label>
                </BillTo>
                <ItemList />
            </form>
            <ActionSection>
                <SecondaryButton>Discard</SecondaryButton>
                <div>
                    <SecondaryButton case2>Save as Draft</SecondaryButton>
                    <PrimaryButton content='Save & Send' />
                </div>
            </ActionSection>
        </Wrapper>
    )
}

export default InvoiceForm
