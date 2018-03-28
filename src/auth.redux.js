import axios from 'axios'

const LOGIN = "login";
const LOGOUT = "logout";
const USER_DATA = 'USER_DATA'


export function auth(state = { auth: false, user: "xxx",age:0 }, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, auth: true }
        case LOGOUT:
            return { ...state, auth: false }
        case USER_DATA:
            return { ...state, user: action.payload.username, age: action.payload.age }
        default:
            return state;
    }
}

export function getUserData() {
    // dispatch用来通知数据修改
    return dispatch => {
        axios.get('/data')
            .then(res => {
                if (res.status === 200) {
                    dispatch(userData(res.data))
                }
            })
    }
}
export function userData(data) {
    return { type: USER_DATA, payload: data }
}
export function login() {
    return { type: LOGIN };
}

export function logout() {
    return { type: LOGOUT };
} 