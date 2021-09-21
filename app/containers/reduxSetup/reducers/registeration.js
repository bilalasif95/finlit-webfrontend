const loginReducer = (
    state = {
        UserInfo: 0,
    },
    action
) => {
    switch (action.type) {
        case "Login":
            return { ...state, UserInfo: action.data };
        default:
        // do nothing
    }
    return state;
};

export default loginReducer;
