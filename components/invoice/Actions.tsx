import React from 'react'
import PrimaryButton from '../../elements/PrimaryButton'
import SecondaryButton from '../../elements/SecondaryButton'
import styled from 'styled-components'

const Wrapper = styled.div`
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


const Actions:React.FC = () => {
    return (
        <Wrapper>
            <div>
                <SecondaryButton>Edit</SecondaryButton>
                <PrimaryButton color='tomato' content='Delete' />
                <PrimaryButton content='Mark as Paid' />
            </div>
        </Wrapper>
    )
}

export default Actions
