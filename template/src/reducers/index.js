import { combineReducers } from 'redux';

function valueReducer(state = null, action) {
  var { type } = action;

  switch (type) {
    case 'INCREMENT': {
      state += 1;
      break;
    }
  }

  return state;
}

var mainReducer = combineReducers({ value: valueReducer });

export { mainReducer as reducer };
