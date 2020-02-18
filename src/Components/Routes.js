import React from 'react';
import {Redirect, Route} from "react-router-dom";
import TimeContainer from "./Time/TimeContainer";
import ColorContainer from "./Color/ColorContainer";
import ModalsPage from "./Modals/ModalsPage";

export const MODALS= '/modals';
export const TIME = '/time';
export const COLOR = '/color';


const Routes = React.memo(() => {
    return (
        <>
            <Route exact path={'/'} render={() => <Redirect to={MODALS}/>}/>
            <Route path={MODALS} render={() => <ModalsPage/>}/>
            <Route path={TIME} render={() => <TimeContainer/>}/>
            <Route path={COLOR} render={() => <ColorContainer/>}/>
        </>
    );
});

export default Routes;
