import React from 'react'
import PrimaryButton from '../../elements/PrimaryButton'
import SecondaryButton from '../../elements/SecondaryButton'
import styled from 'styled-components'

type WrapperType = {bottomCase: boolean} 

const Wrapper = styled.div<WrapperType>`
    background: white;
    padding: 15px;
    & > div{
        margin: auto;
        max-width: 350px;
        display: flex;
        justify-content: space-between;
        & > button{
             font-size: .9rem;
        }
    }
    ${p=>p.theme.media.tablet}{
        ${p=>p.bottomCase && 'display: none'};
        & > div{
            max-width: unset;
            margin: unset;
            width: 100%;
            & > button{
                font-size: 1rem;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > div{
            & > button{
                font-size: 1.2rem;
            }
        }
    }
`

interface RFInterface {
    bottomCase?: boolean
    id: string
}

const Actions:React.FC<RFInterface> = ({bottomCase, id}) => {
    return (
        <Wrapper bottomCase={bottomCase}>
            <div>
                <SecondaryButton>Edit</SecondaryButton>
                <PrimaryButton color='tomato' content='Delete' />
                <PrimaryButton content='Mark as Paid' />
            </div>
        </Wrapper>
    )
}

export default Actions
