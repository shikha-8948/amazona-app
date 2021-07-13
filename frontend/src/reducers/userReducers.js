import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/usersConstant";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };

    //   break;
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    //   break;
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };

    //   break;
    case USER_SIGNOUT:
      return {};

    //   break;

    default:
      return state;
    //   break;
  }
};
