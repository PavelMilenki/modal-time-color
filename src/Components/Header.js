import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {COLOR, MODALS, TIME} from "./Routes";


const Header = React.memo(() => {
    const [show, setShow] = useState(true);
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>

            {show && <NavLink to={MODALS}>modals</NavLink>}
            {show && <NavLink to={TIME}>time</NavLink>}
            {show && <NavLink to={COLOR}>color</NavLink>}


        </div>
    );
});

export default Header;
