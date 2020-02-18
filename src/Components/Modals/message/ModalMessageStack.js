import React, { useEffect, useState} from 'react';
import ModalMessage from './ModalMessage';


const ModalMessageStack = (
    {
        setAddNewModal,

        defEndTop = 30, defMiddle = 20, defHeight = 50,
    }
) => {
    const [modals, setModals] = useState([]);

    const newId = () => {
        return modals.reduce((acc, m) => acc < (m.id || 0) ? (m.id || 0): acc, 0) + 1;
    };
    const addModal = (modal) => {
        const newModals = modals.filter(mf => mf.showClose.show);
        setModals([
            ...newModals.map((m, i, arr) =>
                ({...m, endTop: (m.endTop || defEndTop) + defMiddle + (i > 0 ? arr[i - 1].height : defHeight)})),
            {...modal, id: !modal.id ? newId() : modal.id}
        ]);
    };

    useEffect(() => {
        setAddNewModal({f: addModal}); // subscribe
    }, [setAddNewModal, modals]);

    console.log('render ModalMessageStack');
    return (
        <>
            {modals.map(m => {
                let show = m.showClose.show;
                const close = () => {
                    m.showClose.close();
                };
                return (
                    <ModalMessage key={m.id} {...m} show={show} close={close}>
                        {m.children ? m.children : 'message'}
                    </ModalMessage>
                )
            })}
        </>
    );
};

export default ModalMessageStack;
