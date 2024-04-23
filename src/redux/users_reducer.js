let initial_state = {
    users_data: [ ],
    page_size: 100,
    total_users_count: 100,
    current_page: 1,
    is_fetching: true,
}
export const usersReducer = (state=initial_state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users_data: state.users_data.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users_data: state.users_data.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users_data: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, current_page: action.current_page}

        case TOGGLE_IS_FETCHING:
            return {...state, is_fetching: action.is_fetching}

        case SET_TOTAL_USERS_COUNT:
            debugger;
            return {...state, total_users_count: action.total_users_count}

        default:
            console.log('Updated. Nothing changed!')
            return state;
    }
}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const follow = (user_id) => {
    return { type: FOLLOW, user_id }
}
export const unfollow = (user_id) => {
    return { type: UNFOLLOW, user_id }
}
export const set_users = (users) => {
    return { type: SET_USERS, users }
}
export const set_current_page = (current_page) => {
    return { type: SET_CURRENT_PAGE, current_page }
}
export const set_total_users_count = (total_users_count) => {
    return { type: SET_TOTAL_USERS_COUNT, total_users_count }
}
export const toggle_is_fetching = (is_fetching) => {
    return { type: TOGGLE_IS_FETCHING, is_fetching }
}