import React from 'react'
import Actions from './Actions'
import InvoiceStatus from '../../elements/InvoiceStatus'

const TopBar:React.FC = () => {
    return (
        <div>
            <div>
                <h2>Status</h2>
                <InvoiceStatus status='pending' />
            </div>
            <Actions />
        </div>
    )
}

export default TopBar
