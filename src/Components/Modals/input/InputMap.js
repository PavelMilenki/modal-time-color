import React, { useEffect, useMemo, useState} from 'react';

const InputMap = (
    {
        inputData,
        setSaveInputs,
        inputStyles,
    }
) => {
    const defAnswersData = useMemo(() => {
        return inputData ? inputData.map((iD, i) => ({id: i, value: iD[0], setValue: iD[1]})) : [];
    }, [inputData]);
    const [modalInputData, setModalInputData] = useState(defAnswersData);

    const setInputData = (id, value) => {
        setModalInputData(modalInputData.map(iD => iD.id === id ? {...iD, value} : iD));
    };
    useEffect(() => {
        setSaveInputs({f: successCloseModal}) // subscribe
    }, [modalInputData]);

    const successCloseModal = () => {
        for (const iD of modalInputData) iD.setValue(iD.value);
    };

    console.log('render InputMap');
    return (
        <>
            {modalInputData.map(iD => (
                <input
                    key={iD.id}
                    value={iD.value}
                    style={{...inputStyles}}
                    onChange={e => setInputData(iD.id, e.currentTarget.value)}
                />
            ))}
        </>
    );
};

export default InputMap;
