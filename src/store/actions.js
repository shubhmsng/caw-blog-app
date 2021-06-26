import CONSTANTS from "../constants/CONSTANTS"

export const setBlogs = (blogs) => {
    return {
        type: CONSTANTS.SET_BLOGS,
        payload: blogs
    }
}

export const setFilteredBlogs = (blogs) => {
    return {
        type: CONSTANTS.FILTER_BLOGS,
        payload: blogs
    }
}

export const setSearchText = (text) => {
    return {
        type: CONSTANTS.SET_SEARCH_BLOG_TEXT,
        payload: text
    }
}

export const setPost = (post) => {
    return {
        type: CONSTANTS.SET_POST,
        payload: post
    }
}

export const setComments = (comments) => {
    return {
        type: CONSTANTS.SET_COMMENTS,
        payload: comments
    }
}