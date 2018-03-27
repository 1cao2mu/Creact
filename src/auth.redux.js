const LOGIN = "login";
const LOGOUT = "logout";


export function auth(state = { auth: false, name: "heheda" }, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, auth: true }
        case LOGOUT:
            return { ...state, auth: false }
        default:
            return state;
    }
}


export function login() {
    return { type: LOGIN };
}

export function logout() {
    return { type: LOGOUT };
} 