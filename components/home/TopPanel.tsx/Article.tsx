import styled from 'styled-components'

const Wrapper = styled.article`
    & > h1{
        font-size: 1rem;
    }
    & > span{
        & > p{
            font-size: .8rem;
            opacity: .7;
            &:nth-child(1){
                display: none;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > h1{
            font-size: 2.5rem;
        }
        & > span{
            display: flex;
            & > p{
                font-size: 1.1rem;
                &:nth-child(1){
                    margin-right: 7px;
                    display: block;
                }
            }
        }
    }
`


const Article:React.FC = () => {
    return (
        <Wrapper>
            <h1>Invoices</h1>
            <span>
                <p>There are</p>
                <p>7 invoices</p>
            </span>
        </Wrapper>
    )
}

export default Article
