const SET_COMMENTS = "comments/SET_COMMENTS"

export const setComments = comments => {
    return {
        type: SET_COMMENTS,
        comments,
    };
};

const initialState = {}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                ...action.comments
            }
        default:
            return state
    }
}

export default commentReducer;
