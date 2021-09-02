import axios from 'axios';
import {storeData} from '../utils';
import {API_URL, API_URL2} from '../utils/constant';

export const LOGIN_PERSONAL = 'LOGIN_PERSONAL';

// Performer
export const loginUser = (username, password) => {
  console.log('data siapa : ' + username + ' ' + password);

  return dispatch => {
    //   Loading
    dispatch({
      type: LOGIN_PERSONAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Post Data
    axios
      .post(API_URL + '/user-service/login', {
        username: username,
        password: password,
      })
      .then(res => {
        console.log(res);
        if (res.status !== 200 || res.status !== 201) {
          // Fail
          dispatch({
            type: LOGIN_PERSONAL,
            payload: {
              loading: false,
              data: res.data ? res.data : [],
              errorMessage: false,
            },
          });
          storeData('users', res);
        } else {
          //BERHASIL
          dispatch({
            type: LOGIN_PERSONAL,
            payload: {
              loading: false,
              data: false,
              errorMessage: res,
            },
          });
          alert('gak ada user');
        }
      })
      .catch(error => {
        dispatch({
          type: LOGIN_PERSONAL,
          payload: {
            loading: false,
            data: false,
            errorMessage: true,
          },
        });
        alert('Your Connection is Invalids');
      });
  };
};
