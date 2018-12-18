import React from 'react';
import {connect} from 'react-redux';
import {addSecond, stopwatchRestarted} from "../actions/stopwatch";

let incrementor;

const Stopwatch = (props)=>{
    function getSeconds() {
        return ('0' + props.seconds % 60).slice(-2);
    }

    function getMinutes() {
        return (Math.floor(props.seconds / 60));
    }

    function handleStart() {
        clearInterval(incrementor);
        incrementor = setInterval(() => {
                props.dispatch(addSecond());

            }
            , 1000);
        props.dispatch(stopwatchRestarted())
    }

    function handleStop() {
        clearInterval(incrementor);
    }

    return (
        <div className="stopwatch">
            {props.restartStopwatch && handleStart()}
            {props.isFinished && handleStop()}
            {`${props.seconds} SEC`}
        </div>
    );
}





const mapStateToProps = (state)=>({
    seconds: state.time,
    restartStopwatch: state.restartStopwatch,
    isFinished: state.isFinished
});


const motherComponentCreator = connect(mapStateToProps);
export default motherComponentCreator(Stopwatch);
