import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import * as actionTypes from './actionType';
import {updateObject} from '../lib/updateObject'


const exampleInitialState = {
    color: 'linear-gradient(#FFC400,#FFCE1F,#FFDA54)',
    navColor : 'white',
    bodyColor: 'black',
    colorC: false,
}


// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COlOR_BLUE:
            return updateObject(state, {
                color: action.blue,
                navColor: action.fontAblue,
                bodyColor:action.bodyColor,
                colorC: true
            })
        case actionTypes.CHANGE_COlOR_YELLOW:
            return updateObject(state, {
                color: action.yellow,
                navColor: action.fontAyellow,
                bodyColor: 'black',
                colorC: true
            })
        case actionTypes.CHANGE_COlOR_GREY:
            return updateObject(state, {
                color: action.grey,
                navColor: action.fontAgrey,
                bodyColor: 'black',
                colorC: true
            })
        case actionTypes.CHANGE_COlOR_AFTER_RE:
            return updateObject(state, {
                color: action.thiscolor,
                navColor: action.thisAcolor,
                bodyColor: action.bodyColor,
                colorC: true
            })
        default: return state
    }
}

export function initializeStore (initialState = exampleInitialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }

