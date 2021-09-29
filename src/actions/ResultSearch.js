import axios from 'axios';
import {API_URL, API_URL2, clearStorage, storeData} from '../utils';

export const SEARCH_NAME = 'SEARCH_NAME';

export const saveKeywordName = search => {
  return dispatch => {
    dispatch({
      type: SEARCH_NAME,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_URL + ':2001/business-service/v1/v2/vendor?&q=' + search,
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: SEARCH_NAME,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          console.log(response.data.data);
          dispatch({
            type: SEARCH_NAME,
            payload: {
              loading: false,
              data: response.data.data ? response.data.data : [],
              errorMessage: false,
            },
          });
          storeData('historysearch', search);
          storeData('historydata', response.data.data);
        }
      })
      .catch(error => {
        dispatch({
          type: SEARCH_NAME,
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
