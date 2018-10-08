import * as actionTypes from './actionType';

const color = {
    blue:'linear-gradient(to bottom, #34e89e, #164659)',
    yellow:'linear-gradient(#FFC400,#FFCE1F,#FFDA54)',
    grey:'#F8F8F8',
    fontAyellow: 'white',
    fontAblue: 'white',
    fontAgrey: '#444',
    bodylight: 'white',
    bodydark:'black'
}

export const changeColorBlue = () =>  {
    localStorage.setItem('token',  color.blue);
    localStorage.setItem('token2',  color.fontAblue);
    localStorage.setItem('token3',  color.bodylight);
    return{ type: actionTypes.CHANGE_COlOR_BLUE, blue: color.blue,fontAblue:color.fontAblue,bodyColor:color.bodylight}
}

export const changeColorYellow = () =>  {
    localStorage.setItem('token', color.yellow);
    localStorage.setItem('token2',  color.fontAyellow);
    localStorage.setItem('token3',  color.bodydark);
    return { type: actionTypes.CHANGE_COlOR_YELLOW, yellow: color.yellow,fontAyellow:color.fontAyellow }
}

export const changeColorGrey = () =>  {
    localStorage.setItem('token', color.grey);
    localStorage.setItem('token2',  color.fontAgrey);
    localStorage.setItem('token3',  color.bodydark);
    return { type: actionTypes.CHANGE_COlOR_GREY, grey: color.grey,fontAgrey:color.fontAgrey}
}

export const changeColorAfterRes = () => {
    return { type: actionTypes.CHANGE_COlOR_AFTER_RE, thiscolor: localStorage.getItem('token'),thisAcolor: localStorage.getItem('token2'),bodyColor:localStorage.getItem('token3',  color.bodylight)}
}

export const autoChangeColor = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token) 
            dispatch(changeColorAfterRes())
    }
}