import { CSSProperties } from 'react'
import styled from 'styled-components'
import PlusIco from '../public/assets/icon-plus.svg'

type StyledBtnType = { content: string, case2: boolean}

interface StyledVariables extends CSSProperties {
    '--color': string;
}

const StyledBtn = styled.button<StyledBtnType>(({theme:{media:{tablet},colors:{blue, cornflower_blue, white_lavender}}, case2, content }) =>`
    cursor: pointer;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
    background: var(--color, ${blue});
    padding: 10px;
    white-space: nowrap;
    color: ${case2 ?  cornflower_blue : 'white'};
    overflow: hidden;
    border-radius: 40px;
    ${content && `
        font-size: 1.2rem;
        padding: 20px 25px;
    `}
    ${case2 && `
        justify-content: center;
        background: ${white_lavender};
        width: 100%;
    `};
    &:hover{
        ${case2 ? 'background: #DFE3FA' : 'opacity: .7'};
    }
    & > p{
        font-size: .9rem;
        &:nth-child(2){
            margin-right: 10px;
        }
        &:nth-child(3){
            display: none;
        }
    }
    & > div{
        flex-shrink: 0;
        margin-right: 10px;
        display: flex;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background white;
        & > svg{
            margin: auto;
        }
    }
    ${tablet}{
        ${!content && `
            padding: 15px;
            & > div{
                margin-right: 25px;
                width: 40px;
                height: 40px;
                & > svg{
                    transform: scale(1.7);
                }
            }
            & > p{
                font-size: 1.1rem;
                &:nth-child(2){
                    margin-right: 7px;
                }
                &:nth-child(3){
                    display: block;
                }
            }
        
        `}
    }
`)

interface BtnInterface {
    content?: string
    clickHandler?: ()=>{}
    color?: string
    case2?: boolean
}

const PrimaryButton:React.FC<BtnInterface> = ({ content, clickHandler, color, case2 }) => {
    return (
        <StyledBtn style={ {'--color': color} as StyledVariables } onClick={clickHandler} content={content} case2={case2}>
            {content ? content:
            <>
                <div><PlusIco /></div>
                <p>New</p>
                <p>Invoice</p>
            </>
            }
        </StyledBtn>
    )
}

export default PrimaryButton



//how to use

    // <PrimaryButton />
    // <PrimaryButton content='Mark as Paid' />
    // <PrimaryButton color='tomato' content='Delete' />
    // <PrimaryButton case2 content='+ Add New Item' />
    // <SecondaryButton>Edit</SecondaryButton>
    // <SecondaryButton case2>Save as Draft</SecondaryButton>