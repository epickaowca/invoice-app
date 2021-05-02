import React from 'react'
import { useState, CSSProperties } from 'react'
import styled from 'styled-components'
import ArrowIco from '../../../public/assets/icon-arrow-down.svg'
import { updateFilters } from '../../../redux/duck/app'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/duck'

interface WrapperVariables extends CSSProperties{
    '--filter--visible': string
    '--bg-color': string
}

const Wrapper = styled.div`
position: relative;
& > div{
        &:nth-child(1){
            cursor: pointer;
            display: flex;
            align-items: center;
            & > span{
                margin-right: 10px;
                & > p{
                    &:nth-child(2){
                        display: none;
                    }
                }
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(1){
                & > span{
                    display: flex;
                    & > p{
                        &:nth-child(2){
                            margin-left: 7px;
                            display: block;
                        }
                    }
                }
            }
        }
    }
`

const FiltersWrapper = styled.div`
    display: var(--filter--visible);
    padding: 10px 15px;
    width: 120px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.2);
    background: var(--bg-color);
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    & > label{
        cursor: pointer;
        margin: 7px 0px;
        display: flex;
        font-weight: bold;
        & > input{
            margin-right: 15px;
        }
    }
    ${p=>p.theme.media.tablet}{
        width: 190px;
        padding: 10px 25px;
    }
`

interface FilterInterface {
    darkMode: boolean
}

const Filter:React.FC<FilterInterface> = ({darkMode}) => {
    const filters = useSelector((state:AppState)=>state.app.filters)
    const dispatch = useDispatch()
    const [filterVisible, setFilterVisible] = useState(false)
    const filterStyle = filterVisible ? 'flex' : 'none'
    const bgColorStyle = darkMode ? '#1E2139' : 'white'

    const { draft, pending, paid } = filters

    const checkBoxHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, checked } = e.target
        dispatch(updateFilters({name: name, value:checked}))
    }

    return (
        <Wrapper>
            <div onClick={()=>setFilterVisible(prev=>!prev)}>
                <span>
                    <p>Filter</p>
                    <p>by status</p>
                </span>
                <ArrowIco />
            </div>
            <FiltersWrapper style={{'--filter--visible': filterStyle, '--bg-color': bgColorStyle} as WrapperVariables}>
                <label>
                    <input onChange={checkBoxHandler} checked={draft} name='draft' type='checkbox' />
                    Draft
                </label>
                <label>
                    <input onChange={checkBoxHandler} checked={pending} name='pending' type='checkbox' />
                    Pending
                </label>
                <label>
                    <input onChange={checkBoxHandler} checked={paid} name='paid' type='checkbox' />
                    Paid
                </label>
            </FiltersWrapper>
        </Wrapper>
    )
}

export default React.memo(Filter)
