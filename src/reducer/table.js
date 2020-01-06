import { handleActions } from 'redux-actions'
import { TABLE_DATA_POST } from '@/constants/actionTypes'

const initState = {
    tableData: '',
}

export default handleActions({
    [TABLE_DATA_POST]: (state, action) => ({ ...state, tableData: action.payload })
}, initState)