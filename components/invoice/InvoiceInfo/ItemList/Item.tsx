import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div{
        &:nth-child(1){

        }
        &:nth-child(2){
            & > p{
                display: none;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(1){
                flex: 2;
                & > p{
                    display: none;
                }
            }
            &:nth-child(2){
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex: 3;
                & > p{
                    display: block;
                }
            }
        }
    }
`
const Item:React.FC = () => {
    return (
        <Wrapper>
            <div>
                <strong>Banner Design</strong>
                <p>2x £ 150.00</p>
            </div>
            <div>
                <p>1</p>
                <p>£ 150.00</p>
                <strong>£ 300.00</strong>
            </div>
        </Wrapper>
    )
}

export default Item
