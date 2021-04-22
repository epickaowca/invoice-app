import styled from 'styled-components'

interface WrapperInterface {color: any}

const Wrapper = styled.div<WrapperInterface>`
    background-color: ${p=>p.color[1]};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 50px;
    border-radius: 15px;
    & > p{
        color: ${p=>p.color[0]};
        font-weight: 700;
        font-size: 1rem;
        &:first-letter{
            text-transform: uppercase;
        }
    }
    & > div{
        border-radius: 50%;
        margin-right: 15px;
        width: 10px;
        height: 10px;
        background-color: ${p=>p.color[0]};
    }
    ${p=>p.theme.media.tablet}{
        width: 140px;
        height: 50px;
        & > p{
            font-size: 1.1rem;
        }
    }
`

type ComponentType = { status:string }

const InvoiceStatus:React.FC<ComponentType> = ({status}) => {
    const color = status === 'pending' ? ['#FF8F00', 'rgba(255,143,0,.1)'] : status==='draft' ? ['#373B53', 'rgba(55,59,83,.1)'] : ['#33D69F', 'rgba(51,214,159,.1)']
    return (
        <Wrapper color={color}>
            <div></div>
            <p>
                {status}
            </p>
        </Wrapper>
    )
}

export default InvoiceStatus
