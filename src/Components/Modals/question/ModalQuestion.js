import React from 'react';
import Modal from "../Modal";




const ModalQuestion = (
    {
        setTrue, setFalse,

        buttonStyles,
        trueStyles, falseStyles,
        buttonTrue = 'Yes', buttonFalse = 'No',

        enableBackground, backgroundStyle,
        backgroundOnClick = () => {},

        width, height,
        modalStyle, modalOnClick = () => {},

        show, children,
    }
) => {


    return (
        <Modal
            enableBackground={enableBackground} backgroundOnClick={backgroundOnClick}
            backgroundStyle={backgroundStyle}

            width={width} height={height}
            modalOnClick={modalOnClick} modalStyle={modalStyle}

            show={show}
        >
            {children ? children : 'question Modal'}
            <div style={{width: '100%', ...buttonStyles}}>
                <button onClick={setTrue} style={{...trueStyles}}>{buttonTrue}</button>
                <button onClick={setFalse} style={{...falseStyles}}>{buttonFalse}</button>
            </div>
        </Modal>
    );
};

export default ModalQuestion;
