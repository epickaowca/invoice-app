import styled from 'styled-components'
import PrimaryButton from '../../PrimaryButton'
import Item from './Item'

const StyledItemList = styled.div`
    & > h1{
        color: #777F98;
        margin-bottom: 20px;
    }
    & > button{
        margin-top: 45px;
    }
    & > div{
        display: none;
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            display: flex;
            justify-content: space-between;
            & > p{
                flex: 3;
                margin-right: 15px;
                color: ${p=>p.theme.colors.cornflower_blue};
            }
            & > div{
                flex: 4;
                justify-content: space-between;
                display: flex;
                & > p{
                    color: ${p=>p.theme.colors.cornflower_blue};
                    &:nth-child(1){
                        flex: 1;
                    }
                    &:nth-child(2){
                        flex: 2;
                        margin: 0px 15px;
                    }
                    &:nth-child(3){
                        flex: 3;
                    }
                }
            }
        }
    }
`


const ItemList = () => {
    return (
        <StyledItemList>
            <h1>Item List</h1>
            <div>
                <p>Item Name</p>
                <div>
                    <p>Qty.</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
            </div>
            <section>
                <Item />
                <Item />
            </section>
            <PrimaryButton case2 content='+ Add New Item' />
        </StyledItemList>
    )
}

export default ItemList
