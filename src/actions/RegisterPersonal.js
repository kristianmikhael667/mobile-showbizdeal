import axios from 'axios';
import {API_URL, API_URL2} from '../utils/constant';

export const REGISTER_PERSONAL = 'REGISTER_PERSONAL';

// Performer
export const registerUser = data => {
  console.log('data siapa : ' + data.username);

  return dispatch => {
    //   Loading
    dispatch({
      type: REGISTER_PERSONAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Post Data
    axios
      .post(API_URL + '/user-service/register', {
        username: data.username,
        email: data.email,
        password: data.password,
        full_name: data.username,
        role: data.role,
      })
      .then(res => {
        if (res.status !== 200) {
          // Fail
          dispatch({
            type: REGISTER_PERSONAL,
            payload: {
              loading: false,
              data: false,
              errorMessage: res,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: REGISTER_PERSONAL,
            payload: {
              loading: false,
              data: res ? res : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: REGISTER_PERSONAL,
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
