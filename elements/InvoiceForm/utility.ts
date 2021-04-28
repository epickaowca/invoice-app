import {css} from 'styled-components'

export const formCss = css`
    position: relative;
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

export const defaultFormState = {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 3,
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    items: [
        {
            name: "", quantity: 1, price: 0, total: "0.00", id: 'xdwafe'
        },
    ],
    total: 0
}

export const IdGenerator = ()=>Math.random().toString(36).substr(2, 9)