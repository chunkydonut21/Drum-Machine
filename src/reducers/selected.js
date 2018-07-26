import { SELECTED_KEY } from '../actions/index';

const selected = (state = null, action ) => {
  switch(action.type) {
    case SELECTED_KEY:
      return action.payload || false;
  }
  return state;
}

export default selected;