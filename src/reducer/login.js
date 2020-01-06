import { handleActions } from 'redux-actions'

const initState = {
    username: '',
    token: '',
}
// 页面返回的数据
export default handleActions({
    LOGIN: (state, action) => ({ ...state, username: '暂时无返回值' }),
    SAVE_TOKEN: (state, action) => ({ ...state, token: action.payload.token })
}, initState)