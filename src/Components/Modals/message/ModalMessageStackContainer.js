import React, {useState} from 'react';
import ModalMessageStack, {IStackModal} from "./ModalMessageStack";


const successModal = {
    showClose: {
        show: true,
        close() {
            this.show = false
        },
    },
    endTop: 30,

    width: 100, height: 50,
    children: 'success',
};
const errorModal = {
    showClose: {
        show: true,
        close() {
            this.show = false
        },
    },
    endTop: 30,

    width: 100, height: 50,
    children: 'error',
    modalStyle: {background: 'red'},
};

const ModalMessageStackContainer = () => {
    const [addNewModal, setAddNewModal] = useState({f: (modal) => {}}); // subscribe

    console.log('render ModalMessageStackContainer');
    return (
        <>
            <div style={{}}>
                <div>
                    <button
                        onClick={() => addNewModal.f({...successModal, showClose: {...successModal.showClose}})}
                    >
                        add success
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => addNewModal.f({...errorModal, showClose: {...errorModal.showClose}})}
                    >
                        add error
                    </button>
                </div>
            </div>


            <ModalMessageStack
                setAddNewModal={setAddNewModal}
            />
        </>
    );
};

export default ModalMessageStackContainer;
