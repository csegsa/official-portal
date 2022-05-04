import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import RoleForm from './RoleForm'

const FormModal = ({setInput}) => {

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
                    <RoleForm setInput={setInput}/>
                </ModalBody>
                <ModalFooter>
                {/* <Button
                    color="primary"
                    onClick={toggle}
                >
                    Close
                </Button> */}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default FormModal