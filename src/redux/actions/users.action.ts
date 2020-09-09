import Types from '../constants/user.constant';

const getUsersRequest: any = (data: any) => ({
  type: Types.GET_USERS_REQUEST,
  data,
});

const getUsersSuccess: any = (data: any) => ({
  type: Types.GET_USERS_SUCCESS,
  data,
});

const createUserRequest: any = (data: any) => ({
  type: Types.CREATE_USER_REQUEST,
  data,
});

const deleteUserRequest: any = (data: any) => ({
  type: Types.DELETE_USER_REQUEST,
  data,
});

const usersError: any = (data: any) => ({
  type: Types.USERS_ERROR,
  data,
});

export const usersActions = {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
  getUsersSuccess,
};

export default usersActions;
