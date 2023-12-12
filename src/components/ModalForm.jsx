
const ModalForm = (props) => {

    const {isOpen, closeModal, afterOpenModal} = props

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            />
        </div>
    )
}

export default ModalForm