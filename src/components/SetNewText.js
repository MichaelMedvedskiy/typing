import React from 'react';
import {connect} from 'react-redux';
import {setText} from "../actions/letters";


const SetNewText = (props)=>{

    return (
    <div className="setNewText">
        <button onClick = {
            ()=>{
                let newText = prompt('Input here what you are about to type');
                if(!newText || newText.length <5) {alert("The text is too short!");}
                else{
                props.dispatch(setText(newText));
                }

            }
        }>
            Set new text
        </button>
    </div>
)};



const mapStateToProps = (state)=>({

});


const motherComponentCreator = connect(mapStateToProps);
export default motherComponentCreator(SetNewText);

