import styled from 'styled-components'
import ItemList from './ItemList'

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
    border-radius: 7px;
    background: white;
    padding: 25px;
    margin-top: 25px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.07);
    & p {
        color: ${p=>p.theme.colors.cornflower_blue};
    }
    ${p=>p.theme.media.desktop}{
        padding: 45px;
    }
`

const TopSection = styled.section`
    display: flex;
    flex-direction: column;
    & > div{
        & > p{
            opacity: .7;
        }
        &:nth-child(1){
            margin-bottom: 25px;
        }
    }
    ${p=>p.theme.media.tablet}{
        flex-direction: row;
        justify-content: space-between;
        & > div{
            & > h1{
                margin-bottom: 15px;
            }
        }
    }
`
const MiddleSection = styled.section`
    margin: 25px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div{
        margin: 25px 5px;
        &  h1{
            margin: 12px 0px;
        }
        &:nth-child(1){
            display: flex;
            flex-direction: column;
            justify-content: space-between
        }
    }
    ${p=>p.theme.media.tablet}{
        justify-content: flex-start;
        & > div{
            margin: 25px 0px;
            &:nth-child(2){
                margin: 25px 100px;
            }
        }
    }
`
const BottomSection = styled.section`
& > section{
    &:nth-child(1){
        background: ${p=>p.theme.colors.white_lavender};
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        & > div{
            &:nth-child(1){
                display: none;
            }
        }
        }
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px;
            background: #373B53;
            color: white;
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
            & > p{
                color: white;
            }
            & > h1{
                font-size: 1.2rem;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > section{
            &:nth-child(1){
                padding: 25px;
                & > div{
                    &:nth-child(1){
                        display: flex;
                        padding: 15px;
                        & > p{
                            flex: 2;
                        }
                        & > div{
                            flex: 3;
                            display: flex;
                            justify-content: space-between;
                            & > p{
                                &:nth-child(2){
                                    width: 65px;
                                }
                            }
                        }
                    }
                }
            }
            &:nth-child(2){
                padding: 35px;
                & > h1{
                    font-size: 2rem;
                }
            }
        }
    }
`

interface RFInterface {
    id: string
}


const InvoiceInfo:React.FC<RFInterface> = ({id}) => {
    
    return (
        <Wrapper>
            <TopSection>
                <div>
                    <h1>#XMW142</h1>
                    <p>Graphic Design</p>
                </div>
                <div>
                    <p>19 Untuin Terrace</p>
                    <p>London</p>
                    <p>E1 3EZ</p>
                    <p>United Kingdom</p>
                </div>
            </TopSection>
            <MiddleSection>
                <div>
                    <div>
                        <p>Invoice Date</p>
                        <h1>21 Aug 2021</h1>
                    </div>
                    <div>
                        <p>Invoice Date</p>
                        <h1>21 Aug 2021</h1>
                    </div>
                </div>
                <div>
                    <p>Bill To</p>
                    <h1>Alex Grim</h1>
                    <p>84 Church Way</p>
                    <p>Bradfprd</p>
                    <p>BD102PD</p>
                    <p>United Kingdom</p>
                </div>
                <div>
                    <p>Sent to</p>
                    <h1>alexgrim@mail.com</h1>
                </div>
            </MiddleSection>
            <BottomSection>
                <section>
                    <div>
                        <p>Item Name</p>
                        <div>
                            <p>QTY.</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>
                    </div>
                    <ItemList />
                </section>
                <section>
                    <p>Grand Total</p>
                    <h1>£ 456.00</h1>
                </section>
            </BottomSection>
        </Wrapper>
    )
}

export default InvoiceInfo
