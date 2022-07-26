import Modal from 'react-modal';
const customStyles = {
    content: {
        width: '40%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Modals({ children, isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onClose()}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            {children}
        </Modal>
    )
}