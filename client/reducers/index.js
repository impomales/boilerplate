// use to combine multiple reducers.

// import { combineReducers } from 'redux';

// const reducer = combineReducers({ /* imported reducers here */});

export default function reducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
