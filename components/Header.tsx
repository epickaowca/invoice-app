import Image from 'next/image'
import Moon from '../public/assets/icon-moon.svg'
import { useDispatch } from 'react-redux'
import { setDarkMode } from '../redux/duck/app'


import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: #373B53;
    display: flex;
    justify-content: space-between;
    padding-right: 25px;
    ${p=>p.theme.media.desktop}{
        padding: unset;
        padding-bottom: 25px;
        flex-direction: column;
        height: 100vh;
        max-height: 100vh;
        width: 100px;
        border-top-right-radius: 20px;
        position: absolute;
        left: 0px;
        top: 0px;
    }
`

const ImageDiv = styled.div`
    background: ${p=>p.theme.colors.blue};
    position: relative;
    width: 70px;
    height: 70px;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    display: flex;
    overflow: hidden;
    & > div{
        margin: auto !important;
    }
    &:before{
        border-top-left-radius:20px;
        border-bottom-right-radius:20px;
        width: 70px;
        height: 35px;
        bottom: 0px;
        position: absolute;
        content: '';
        display: none;
        display: block;
        background: ${p=>p.theme.colors.medium_blue};
    }
    ${p=>p.theme.media.tablet}{
        width: 100px;
        height: 100px;
        &:before{
            width: 100px;
            height: 50px;
        }
        & > div{
            transform: scale(1.5);
        }
    }
`

const RigthBar = styled.div`
    display: flex;
    align-items: center;
    & > svg{
        padding: 5px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-right: 25px;
    }
    & > div{
        padding-left: 25px;
        height: 100%;
        border-left: 1px solid rgba(255,255,255,.6);
        display: flex;
        & > div{
            margin: auto;
            border-radius: 50%;
            overflow: hidden;
            width: 30px;
            height: 30px;
            & > div{
                width: 35px;
                height: 35px;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > svg{
            padding: 15px;
            width: 50px;
            height: 50px;
            transform: scale(1.8);
        }
        & > div{
            height: 100px;
            & > div{
                width: 50px;
                height: 50px;
                & > div{
                    width: 55px;
                    height: 55px;
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        height: 250px;
        flex-direction: column;
        justify-content: flex-end;
        & > svg{
            margin: 0px;
            margin-bottom: 35px;
            transform: unset;
            padding: 0px;
            width: 40px;
            height: 40px;
            padding: 10px;
            transform: scale(1.5);
        }
        & > div{
            width: 100%;
            padding: 0px;
            border: none;
            border-top: 1px solid rgba(255,255,255,.6);
            padding-top: 25px;
        }
    }
`

const Header = () => {
    const dispatch = useDispatch()
    return (
        <StyledHeader>
            <ImageDiv>
                <Image src='/assets/logo.svg' width="28" height="26" alt='logo' />
            </ImageDiv>
            <RigthBar>
                <Moon onClick={()=> dispatch(setDarkMode())} />
                <div>
                    <div>
                        <Image objectFit='cover' src='/assets/image-avatar.jpg' width="80" height="80" alt='avatar' />
                    </div>
                </div>
            </RigthBar>
        </StyledHeader>
    )
}

export default Header
