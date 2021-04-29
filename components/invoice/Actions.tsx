import React from 'react'
import PrimaryButton from '../../elements/PrimaryButton'
import SecondaryButton from '../../elements/SecondaryButton'

const Actions:React.FC = () => {
    return (
        <div>
            <SecondaryButton>Edit</SecondaryButton>
            <PrimaryButton color='tomato' content='Delete' />
            <PrimaryButton content='Mark as Paid' />
        </div>
    )
}

export default Actions
