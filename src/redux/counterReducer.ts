import {Dispatch} from "redux";

type ActionType = ReturnType<typeof setDigit>

const SET_DIGIT = 'COUNTER/SET_DIGIT'

export type CounterType = {
    digit: number
    disabledInc: boolean
    disabledReset: boolean
}

let initialState: CounterType = {
    digit: 0,
    disabledInc: false,
    disabledReset: true
}

export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case SET_DIGIT: {
            return {
                ...state,
                digit: action.digit,
                disabledInc: action.digit === 5 ? true : action.digit === 0 ? false : false,
                disabledReset: action.digit === 0 ? true : action.digit === 5 ? false : false
            }
        }
        default:
            return state
    }
}

export const setDigit = (digit: number) => ({type: SET_DIGIT, digit} as const)

export const changeDigit = (digit: number) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(digit))
    dispatch(setDigit(digit))
}

export const getCounterValue = () => (dispatch: Dispatch) => {
    let storedValue = Number(localStorage.getItem('counterValue'))
    storedValue && dispatch(setDigit(storedValue))
}