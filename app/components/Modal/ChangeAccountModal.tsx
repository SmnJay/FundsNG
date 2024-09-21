import React from 'react'
import Modal from './Modal'

type Props = {
    showChangeAccount: boolean
    handleModal: () => void
}

const ChangeAccountModal = ({ showChangeAccount, handleModal }: Props) => {
    return (
        <Modal size='large' isOpen={showChangeAccount} onClose={handleModal}>
            <h5 className="text-center text-primary font-medium text-lg">Account</h5>
            <p className="text-center text-gray-800 leading-loose text-sm">Select account for funds withdrawal</p>
        </Modal>
    )
}

export default ChangeAccountModal