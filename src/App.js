import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
//importing components
import Typed from './components/Typed';
import Typing from './components/Typing';
import SetNewText from './components/SetNewText';
import Score from './components/Score';
import configureStore from './store/configureStore.js';
import Stopwatch from './components/Stopwatch'

const store = configureStore();

// const jsx = (
//     <div>
//         <Provider store = {store}>
//           <Typed/>
//           <Typing/>
//           <SetNewText />
//         </Provider>
//     </div>
// );

//ReactDOM.render(jsx, document.getElementById('container'));


class App extends Component {
  render() {
    return (
        <div>
            <Provider store = {store}>
                <Typed/>
                <Typing/>
                <Stopwatch/>
                <Score />
                <SetNewText />

            </Provider>
        </div>
    );
  }
}

export default App;
