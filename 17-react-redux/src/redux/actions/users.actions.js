import axios from "axios";
// kita buat variable sesuai kondisi pengambilan data

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_REJECTED = "GET_USER_REJECTED";

// kita buat function untuk masing masing variable
export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUserRejected = (error) => {
  return {
    type: GET_USER_REJECTED,
    payload: error,
  };
};

// Function untuk ambil data
export const getUser = () => {
  return function (dispatch) {
    dispatch(getUserRequest());

    axios
      .get("https://6215ab69c9c6ebd3ce2e3162.mockapi.io/users")
      .then((result) => dispatch(getUserSuccess(result.data)))
      .catch((error) => dispatch(getUserRejected(error)));
  };
};
