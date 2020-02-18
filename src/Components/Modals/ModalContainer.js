import React, {useState} from 'react';
import Modal from "./Modal";

const ModalContainer = () => {
    const [show, setShow] = useState(false);

    console.log('render ModalContainer');
    return (
        <>
            <button onClick={() => setShow(true)}>show simple Modal</button>
            <Modal
                enableBackground={true} backgroundOnClick={() => setShow(false)}
                width={300} height={200}
                show={show}
            >
                Simple Modal
                <button onClick={() => setShow(false)}>Close</button>
            </Modal>
        </>
    );
};

export default ModalContainer;
