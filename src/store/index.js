import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';

import authReducer from './auth'


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

// import { createStore } from 'redux';
// const redux = require('redux');

// const counterReducer = (state = initialState, action) =>{
//     if(action.type === 'increment'){
//         return{
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

// const counterSubscriber = () => {
//     const latestState = store.getStore();
//     console.log(latestState)
// }

// store.subscribe(counterSubscriber)

// store.dispatch({type: 'increment'})
// store.dispatch({type: 'decrement'})
