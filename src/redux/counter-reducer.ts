type ActionType = ReturnType<typeof setDigit>

export type CounterType = typeof initialState

let initialState = {
    digit: 0,
    disabledInc: false,
    disabledReset: true
}

export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'SET_DIGIT': {
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

export const setDigit = (digit: number) => ({type: 'SET_DIGIT', digit} as const)