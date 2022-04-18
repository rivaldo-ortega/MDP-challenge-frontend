import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import reducer from './reducer';
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

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  nombre: '',
  apellido: '',
  fecha_nacimiento: '',
  users: [],
  avg: [],
};
const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //axios
  const authFetch = axios.create({
    baseURL: 'https://react-node-challenge-backend.herokuapp.com/api',
  });

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createUser = async () => {
    dispatch({ type: CREATE_USER_BEGIN });
    try {
      const { nombre, apellido, fecha_nacimiento } = state;

      await authFetch.post('/users', {
        nombre,
        apellido,
        fecha_nacimiento,
      });

      dispatch({ type: CREATE_USER_SUCCES });

      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      console.log('error');
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getUsers = async () => {
    let url = `/users`;

    dispatch({ type: GET_USERS_BEGIN });
    try {
      const { data } = await authFetch(url);

      const { users } = data;

      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          users,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };
  const getAVG = async () => {
    let url = `/users/avg`;
    try {
      const { data } = await authFetch(url);

      const { avg } = data;

      dispatch({
        type: GET_AVG_SUCCESS,
        payload: {
          avg,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <appContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        handleChange,
        clearValues,
        createUser,
        getUsers,
        getAVG,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => useContext(appContext);

export { AppProvider, useAppContext, initialState };
