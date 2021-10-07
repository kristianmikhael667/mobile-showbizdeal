import axios from 'axios';
import {API_URL, API_URL2, clearStorage, storeData} from '../utils';
export const LIST_CHAT = 'LIST_CHAT';

export const chatlists = token => {
  return dispatch => {
    dispatch({
      type: LIST_CHAT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_URL + '/chat-service/message/user',
      timeout: 1000,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        // console.log('data : ', response.status);
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: LIST_CHAT,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          // console.log(response.data.data);
          dispatch({
            type: LIST_CHAT,
            payload: {
              loading: false,
              data: response.data.results ? response.data.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: LIST_CHAT,
          payload: {
            loading: false,
            data: false,
            errorMessage: true,
          },
        });
        alert('Your Connection is Invalid');
      });
  };
};
