import React from 'react';//third party libraries grouped in the first section 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';//Provider named export func from library
import {createStore} from 'redux'; //redux func to get all reducers and the apps state

import App from './components/App';//my own code grouped in this section
import reducers from "./reducers";


//wrapping the app component with a Provider component that takes the store and reducers
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.querySelector('#root'));