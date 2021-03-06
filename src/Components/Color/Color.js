import React from 'react';

const ColorTest = (
    {
        inputs, setInputs,
        color, setColor,
        deg, setDeg,
        shift, setShift,
    }
) => {
    const mappedGradient = inputs.reduce((acc, inp) => `${acc}, ${inp.color} ${inp.percent}%`, '');
    const colorInputs = inputs.map((inp, i) => (
        <div key={i}>
            <input
                type={'color'}
                value={inp.color}
                onChange={
                    e => setInputs(inputs
                        .map((inInp, inI) => i === inI
                            ? {...inInp, color: e.currentTarget.value} : inInp))
                }
            />
            <input
                type={'number'}
                value={inp.percent}
                onChange={
                    e => setInputs(inputs
                        .map((inInp, inI) => i === inI
                            ? {...inInp, percent: Number(e.currentTarget.value)} : inInp))
                }
            />
            <button onClick={() => setInputs(inputs.filter((inInp, inI) => inI !== i))}>
                delete
            </button>
        </div>
    ));

    console.log('render ColorTest');
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column'
        }}>
            color

            <input type={'color'} value={color} onChange={e => setColor(e.currentTarget.value)}/>
            <div style={{width: '100px', height: '100px', background: color}}/>

            <div
                style={{
                    width: '300px',
                    height: '100px',
                    background: `linear-gradient(${deg}deg${mappedGradient})`,
                }}
            />

            <button onClick={() => setShift(!shift)}>
                {shift ? 'stop' : 'start'}
            </button>

            <input
                type={'number'}
                value={deg}
                onChange={e => setDeg(Number(e.currentTarget.value))}
            />
            {colorInputs}
            <button onClick={() => setInputs([...inputs, inputs[inputs.length - 1]])}>
                add
            </button>

        </div>
    );
};

export default ColorTest;
