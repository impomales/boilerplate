import axios from "axios";

const SET_USER = "SET_USER";

const setUser = user => ({
  type: SET_USER,
  user
});

export const signup = (signupInfo, history) => dispatch => {
  axios
    .post("/auth/signup", signupInfo)
    .then(res => res.data)
    .then(user => {
      dispatch(setUser(user));
      history.push("/");
    })
    .catch(console.error);
};

export const login = (loginInfo, history) => dispatch => {
  axios
    .post("/auth/login", loginInfo)
    .then(res => res.data)
    .then(user => {
      dispatch(setUser(user));
      history.push("/");
    })
    .catch(console.error);
};

export const logout = () => dispatch => {
  axios
    .post("/auth/logout")
    .then(() => {
      dispatch(setUser({}));
    })
    .catch(console.error);
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
