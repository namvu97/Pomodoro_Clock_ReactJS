import * as actions from './action'

let initialState = {
    time: 10,
    isPlay: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.REDUCE_TIME:
            return {
                ...state,
                time: state.time - 1,
            }
        case actions.RESET_TIME:
            return {
                ...state,
                time: 10,
            }
        case actions.TOGGLE_PLAY:
            return {
                ...state,
                isPlay: !state.isPlay,
            }
        default:
            return state
    }
}

export default reducer