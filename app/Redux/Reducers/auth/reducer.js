import types from './actions';

const initialState = {
  accessToken: '',
  activeDrawerTab: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };

    case types.SET_ACTIVE_DRAWER_TAB:
      return {
        ...state,
        activeDrawerTab: action.activeDrawerTab,
      };

    default:
      return state;
  }
}
