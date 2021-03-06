import React, {useEffect, useState} from 'react';
import Modal from "../Modal";



const ModalUp = ({speed = 10}) => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) setShow(true);
        else setShow(false);
    };

    const scroll = () => {
        const step = window.pageYOffset / speed;
        let lastState = window.pageYOffset;

        const innerTimer = setInterval(() => {
            if (lastState < window.pageYOffset) clearInterval(innerTimer);
            lastState = window.pageYOffset;

            window.scroll(0, lastState - step);
            if (window.pageYOffset === 0) clearInterval(innerTimer);
        }, 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    console.log('render ModalUp');
    return (
        <>
            <Modal
                enableBackground={false}

                width={70} height={50}
                modalStyle={{top: '80vh', left: '20px'}} modalOnClick={scroll}

                show={show}
            >
                Up
            </Modal>
        </>
    );
};

export default ModalUp;
