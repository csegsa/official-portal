import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import RoleForm from './RoleForm'

const FormModal = ({setInput, setReload}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button
                color="danger"
                onClick={toggle}
            >
                Add Role
            </Button>
            <Modal
                isOpen={modal}
            >
                <ModalHeader toggle={toggle}>
                Add a new Role
                </ModalHeader>
                <ModalBody>
                    <RoleForm
                        setReload={setReload}
                        setInput={setInput}
                        toggle={toggle}
                    />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default FormModal