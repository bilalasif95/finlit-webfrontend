export const mapStateToProps = state => ({
  userInfo: state.login,
});

export const mapDispatchToProps = dispatch => ({
  Login: async payload => {
    try {
      dispatch({ type: 'Login', data: payload });
    } catch (err) {
      // dispatch(logInFailed(err));
    }
  },
});
