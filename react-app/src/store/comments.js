const SET_COMMENTS = "comments/SET_COMMENTS";
const ADD_COMMENT = "comments/ADD_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";
const REMOVE_ALL_COMMENTS = "comments/REMOVE_ALL_COMMENTS";

export const setComments = comments => {
    return {
        type: SET_COMMENTS,
        comments,
    };
};

const addNewComment = comment => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const updateComment = comment => {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export const removeAllComments = () => ({
    type: REMOVE_ALL_COMMENTS,
})

export const addComment = (payload, taskId) => async dispatch => {
    const response = await fetch(`/api/tasks/${taskId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const comment = await response.json()
        dispatch(addNewComment(comment))
        return comment;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const editComment = (payload, commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const comment = await response.json()
        dispatch(updateComment(comment))
        return comment;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const deleteComment = (commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeComment(commentId));
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

const initialState = {}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                ...action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment,
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment,
            }
        case DELETE_COMMENT:
            let newState = { ...state };
            delete newState[action.commentId];
            return newState;
        case REMOVE_ALL_COMMENTS:
            return {...initialState}
        default:
            return state
    }
}

export default commentReducer;
