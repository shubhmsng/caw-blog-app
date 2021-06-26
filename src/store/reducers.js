import { combineReducers } from "redux"
import CONSTANTS from "../constants/CONSTANTS"

const blogs = (state = [], action) => {
    switch(action.type) {
        case CONSTANTS.SET_BLOGS:
            state = action.payload;
            break;
        default:
            return state;
    }

    return state;
}

const filteredBlog = (state = [], action) => {
    switch(action.type) {
        case CONSTANTS.FILTER_BLOGS:
            state = action.payload;
            break;
        default:
            return state;
    }

    return state;
}

const searchBlog = (state = "", action) => {
    switch(action.type) {
        case CONSTANTS.SET_SEARCH_BLOG_TEXT:
            state = action.payload
            break;
        default:
            return state;
    }
    return state;
}

const post = (state = {}, action) => {
    switch(action.type) {
        case CONSTANTS.SET_POST:
            state = action.payload;
            break;
        default:
            return state;

    }

    return state;
}

const comments = (state = [], action) => {
    switch(action.type) {
        case CONSTANTS.SET_COMMENTS:
            state = action.payload
            break;
        default:
            return state;
    }

    return state;
}

const reducers = combineReducers({
    blogs,
    filteredBlog,
    searchBlog,
    post,
    comments
})

export default reducers;