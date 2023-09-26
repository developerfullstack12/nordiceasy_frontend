import axios from "axios";
import { toast } from "react-toastify";

import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const geUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
//
export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/comments`)
      .then((res) => {
        const userlist = res.data;
        dispatch(geUserList(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const Removeuser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/comments/` + code)
      .then((res) => {
        dispatch(deleteUser());
        toast.success("User removed successfully.");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FunctionAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/comments`, data)
      .then((res) => {
        console.log("post data", data);
        dispatch(addUser());
        toast.success("User Added successfully.");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FunctionUpdateUser = (data, code) => {
  console.log("data, hhhhhhhcode", data, code);
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/api/comments/` + code, data)
      .then((res) => {
        dispatch(updateUser());
        toast.success("User Updated successfully.");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
