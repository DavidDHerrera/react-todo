import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button className='ModalButton' onClick={
            () => {
                setOpenModal(state => !state);
            }
        }
        >+</button>
    )
}

export { CreateTodoButton };