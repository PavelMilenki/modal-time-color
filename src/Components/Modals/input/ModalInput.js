import React, { useState} from 'react';
import Modal from "../Modal";
import InputMap from "./InputMap";




const ModalInput = (
    {
        inputData,
        answer, setAnswer = () => {},

        inputContainerStyles, inputStyles,
        buttonStyles, button = 'OK',

        enableBackground, backgroundStyle,
        backgroundOnClick = () => {},

        width = 100, height = 100,
        modalStyle, modalOnClick = () => {},

        show = false, close = () => {}, children,
    }
) => {
    const [answerData, setAnswerData] = useState(answer);
    const [saveInputs, setSaveInputs] = useState({f: () => {}});

    const successCloseModal = () => {
        saveInputs.f();
        setAnswer(answerData || '');
        setSaveInputs({f: () => {}}); // unsubscribe
        close();
    };

    console.log('render ModalInput');
    return (
        <Modal
            enableBackground={enableBackground}
            backgroundOnClick={() => {
                setAnswerData(answer);
                backgroundOnClick()
            }}
            backgroundStyle={backgroundStyle}

            width={width} height={height} modalOnClick={modalOnClick} modalStyle={modalStyle}

            show={show}
        >
            {children ? children : 'question Modal'}
            <div style={{width: '100%',  ...inputContainerStyles,}}>
                {answer !== undefined && (
                    <input
                        value={answerData}
                        style={{...inputStyles}}
                        onChange={e => setAnswerData(e.currentTarget.value)}
                    />
                )}
                <InputMap
                    inputData={inputData} setSaveInputs={setSaveInputs} // subscribe

                    inputStyles={inputStyles}
                />

            </div>
            <button onClick={successCloseModal} style={{...buttonStyles}}>{button}</button>
        </Modal>
    );
};

export default ModalInput;
