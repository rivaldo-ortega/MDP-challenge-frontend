import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_USER_BEGIN,
  CREATE_USER_SUCCES,
  CREATE_USER_ERROR,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_AVG_SUCCESS,
} from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload.users,
    };
  }
  if (action.type === GET_AVG_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      avg: action.payload.avg,
    };
  }
  if (action.type === CREATE_USER_SUCCES) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New User Created',
    };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return { ...state, [action.payload.name]: action.payload.value };
  }
  if ((action.type = CLEAR_VALUES)) {
    const initialState = {
      nombre: '',
      apellido: '',
      fecha_nacimiento: '',
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === CREATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_USERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  throw new Error(`no such action:${action.type}`);
};
export default reducer;
