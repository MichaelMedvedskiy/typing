import React from 'react';
import {connect} from 'react-redux';
import Letter from './Letter.js';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {nextLetter, wrongLetter} from '../actions/letters';

const Typing = (props)=>(
    <div className="typing">
        <ul className="leftTyping">
            {props.typing.left &&
            props.typing.left.length>0 &&
            props.typing.left.reduce(
                (accumulation, letter)=>{ return accumulation + letter}
            ) !=='' &&
            props.typing.left.map((letter)=>(
                <Letter key = {letter.id} character = {letter} type = "left"/>
            ))}
        </ul>
        <div className="middleTyping">
            {props.typing.middle &&
                props.typing.middle!=='' &&
            <Letter character = {props.typing.middle} type = "middle"/>}
        </div>
        <ul className="rightTyping">
            {props.typing.right &&
            props.typing.right.length>0 &&
            props.typing.right.reduce(
                (accumulation, letter)=>{ return accumulation + letter}
            ) !=='' &&
            props.typing.right.map((letter)=>(
                <Letter key = {letter.id} character = {letter} type = "right"/>
            ))}
        </ul>
        <KeyboardEventHandler
            handleKeys={['all']}
            onKeyEvent={
                (key, e)=>{
                    console.log('only handle number key events');
                    console.log(e);
                    console.log(e.key)

                    if(key==props.typing.middle.toLowerCase() ||  props.typing.middle.toLowerCase() == e.key.toLowerCase() )
                    {props.dispatch(nextLetter());}
                    else if(e.key == "Shift" || e.key == "CapsLock" || e.key == "Control" || e.key == "Alt" || e.key == "Tab") {/*do nothing*/}
                    else {props.dispatch(wrongLetter());}
                    //just scrolling the page to the bottom
                    window.scrollTo(0,document.body.scrollHeight);
                }
            }
            handleFocusableElements  = {true}
        />
    </div>
);



const mapStateToProps = (state)=>({
    typing: state.typing
});


const motherComponentCreator = connect(mapStateToProps);
export default motherComponentCreator(Typing);

