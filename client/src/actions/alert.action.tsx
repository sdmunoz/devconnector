import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../shared/constants/types.constants';

export const setAlert = (msg: string, alertType: string) => (dispatch: any) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};
