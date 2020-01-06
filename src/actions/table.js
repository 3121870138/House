import { createActions } from 'redux-actions'
import { TABLE_DATA_POST } from '@/constants/actionTypes'
import { table } from '@/services'
export const toTable = createActions({
    [TABLE_DATA_POST] : options => table(options),
})