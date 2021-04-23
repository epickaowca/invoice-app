import styled from 'styled-components'
import RemoveIco from '../../../public/assets/icon-delete.svg'

const StyledItem = styled.div`
    margin: 45px 0px;
    & > div{
        display: flex;
        & > label{
            &:nth-child(1){
                flex: 1;
            }
            &:nth-child(2){
                margin: 15px 15px;
                flex: 2;
            }
            &:nth-child(3){
                flex: 3;
                & > div{
                    display: flex;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    justify-content: space-between;
                    & > span{
                        color: ${p=>p.theme.colors.cornflower_blue};
                        margin-right: 5px;
                    }
                    & > svg{
                        cursor: pointer;
                        &:hover{
                            opacity: .7;
                        }
                    }
                }
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        margin: 0px;
        display: flex;
        & > label{
            flex: 3;
        }
        & > div{
            margin-left: 15px;
            flex: 4;
        }
        & p {
            display: none;
        }
    }
`

const Item = () => {
    return (
        <StyledItem>
            <label>
                <p>Item Name</p>
                <input type='text' />
            </label>
            <div>
                <label>
                    <p>Qty.</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Price</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Total</p>
                    <div>
                        <span>156.00</span>
                        <RemoveIco />
                    </div>
                </label>
            </div>
        </StyledItem>
    )
}

export default Item
