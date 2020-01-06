import { 
    REG_USERNAME, 
    REG_PASSWORD, 
    REG_AGAIN_PASSWORD
} from '@/constants/actionTypes'
const initState = {
    regUserName: '',
    regPassWord: '',
    regAgainPassWord: '',
}

export default function register(state = initState, action) {
    switch (action.type) {
        case REG_USERNAME:
            return {...state, regUserName: action.payload}
        case REG_PASSWORD:
            return {...state, regPassWord: action.payload}
        case REG_AGAIN_PASSWORD:
            return {...state, regAgainPassWord: action.payload}
        default:
            return state
    }
}