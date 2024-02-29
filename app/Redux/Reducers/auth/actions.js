const actions = {
  SET_ACCESS_TOKEN: 'auth/SET_ACCESS_TOKEN',
  SET_ACTIVE_DRAWER_TAB: 'auth/SET_ACTIVE_DRAWER_TAB',

  setAccessToken: token => dispatch =>
    dispatch({
      type: actions.SET_ACCESS_TOKEN,
      accessToken: token,
    }),

  setActiveDrawerTab: data => dispatch =>
    dispatch({
      type: actions.SET_ACTIVE_DRAWER_TAB,
      activeDrawerTab: data,
    }),
};

export default actions;
