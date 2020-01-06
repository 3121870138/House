//import { requestPost } from '@/utils/request'
import { 
    REG_USERNAME, 
    REG_PASSWORD,
    REG_AGAIN_PASSWORD,
} from '@/constants/actionTypes'
export function get_username (e) {
    return{
        type: REG_USERNAME,
        payload: e.target.value
    }
}

export function get_password (e) {
    return{
        type: REG_PASSWORD,
        payload: e.target.value
    }
}

export function get_againPassword (e) {
    return{
        type: REG_AGAIN_PASSWORD,
        payload: e.target.value
    }
}