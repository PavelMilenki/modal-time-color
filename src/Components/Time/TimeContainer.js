import React, {useState} from 'react';
import moment from "moment";
import TimeTest from "./TimeTest";

const TimeContainer = () => {

    const time = new Date();

    const [time1, setTime1] = useState(moment(time));
    const [time2, setTime2] = useState(moment(time));
    const newTime = moment.utc(time1.diff(time2));

    return (
        <TimeTest
            time={time}
            time1={time1}
            time2={time2}
            newTime={newTime}

            setTime1={setTime1}
            setTime2={setTime2}
        />
    );
};

export default TimeContainer;
