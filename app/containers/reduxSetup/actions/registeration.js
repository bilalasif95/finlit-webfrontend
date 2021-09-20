export const mapStateToProps = (state) => {
    return {
        userInfo: state.login,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {

        Login: async (payload) => {
            try {
                dispatch({ type: "Login", data: payload });
            } catch (err) {
                // dispatch(logInFailed(err));
            }
        }
    };
};
