import Types from '../constants/user.constant';

const INITIAL_STATE = {
  list: [],
};

const users = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        list: action.data,
      };
    }
    case Types.USERS_ERROR: {
      return {
        ...state,
        error: action.data.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default users;
