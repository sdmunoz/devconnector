import { SET_ALERT, REMOVE_ALERT } from '../shared/constants/types.constants';

const initialState: any = [];

const alertReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
