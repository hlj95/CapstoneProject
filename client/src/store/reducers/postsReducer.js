
const initialState = {
    posts:[],
    info:[],
    comments: [],
    isLoggedIn: false,
    goals:[]
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'INFO':
            return {
                ...state,
                info: action.payload
            }
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'ALL_GOALS':
            return {
                ...state,
                goals: action.payload
            }

            default:
                return state
    }
}

export default reducer


