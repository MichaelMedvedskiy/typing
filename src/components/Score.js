import React from 'react';
import {connect} from 'react-redux';

const getStaticAccuracy = (score, time)=>{
    return score/time;
}

const Score = (props)=>{

    let accuracy = getStaticAccuracy(props.score,props.time);
    return(
    <div  className="score">
        Your score: {props.score}
        <br />
        <div className="congrats">
            {props.isFinished && ` YOU ARE DONE! CONGRATULATIONS!
        Your accuracy mark is ${accuracy.toFixed(2)}, which is ${accuracy > 5 ? "Pretty good!" : accuracy >2.5 ?
        "Ok I guess..." : "Fucking horrible! You should practice more!"}   You have done it in ${props.time} seconds by the way.`}
        </div>
    </div>
)};


const mapStateToProps = (state)=>({
    score: state.score,
    isFinished: state.isFinished,
    time: state.time
});


const motherComponentCreator = connect(mapStateToProps);
export default motherComponentCreator(Score);
