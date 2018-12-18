import React from 'react';
import {connect} from 'react-redux';


const Typed = (props)=>(
    <div  className="typed">
        {props.typed === undefined ? "": props.typed }
    </div>
);




const mapStateToProps = (state)=>({
    typed: state.typed
});


const motherComponentCreator = connect(mapStateToProps);
export default motherComponentCreator(Typed);

