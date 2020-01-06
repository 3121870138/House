import { handleActions } from 'redux-actions'

const initState = {
    username: '',
}

export default handleActions({
    LOGIN: (state, action) => ({ ...state, username: action.payload })
}, initState)