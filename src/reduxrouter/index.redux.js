const ADDGUN = "add";
const JIANGUN = "jian";

//reducer
export function counter(state = 10, action) {
    switch (action.type) {
        case ADDGUN:
            return state + 1;
        case JIANGUN:
            return state - 1;
        default:
            return state;
    }
}
//ActionCreator
export function addGun() {
    return { type: ADDGUN };
}

export function jianGun() {
    return { type: JIANGUN };
}

export function addGunAysnc() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun());
        }, 2000);
    };
}