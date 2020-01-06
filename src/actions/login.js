import { createActions } from 'redux-actions'
import { login } from '@/services'
// 页面调用的数据
export const toLogin = createActions({
    LOGIN: options => login(options),
    SAVE_TOKEN: options => options
})