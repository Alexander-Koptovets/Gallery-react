import React from 'react'
import { store } from '../store'
import { Pic } from '../picture/Pic'
import { NavLink } from 'react-router-dom'
import './index.css'

export function OnePic(props) {
    return (
        <div className='one-pic-screen'>
            <div className='contaimer-link'>
                <NavLink className='link' to='/home/Home'>&lt; Back</NavLink>
            </div>
            <Pic src={store.url} />
        </div>
    )
}