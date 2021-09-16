import axios from 'axios';
import {API_URL} from '../utils';

export const GET_MY_TALENT = 'GET_MY_TALENT';

// Get MyTalent
export const getMyTalent = uid => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_MY_TALENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get My Talent
    axios({
      method: 'get',
      url: API_URL + '/business-service/v2/business/' + uid + '/vendor',
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: GET_MY_TALENT,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: GET_MY_TALENT,
            payload: {
              loading: false,
              data: response.data ? response.data.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_MY_TALENT,
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
