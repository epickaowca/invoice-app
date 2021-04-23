import {css} from 'styled-components'

export const formCss = css`
    margin: 45px 0px;
    & > span{
        color: ${p=>p.theme.colors.blue};
        font-weight: 700;
        display: block;
        margin-bottom: 15px;
    }
    & > div{
        & > div{
            display: flex;
            & > label{
                width: 50%;
                &:nth-child(1){
                    margin-right: 25px;
                }
            }
        }
        & > label{
            width: 100%;
            & > input{
                width: 100%;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            display: flex;
            & > div{
                flex: 2;
            }
            & > label{
                flex: 1;
                margin-left: 25px;
            }
        }
    }
`