import axios from 'axios';
import {API_URL} from '../utils';

export const GET_LIST_SHOWLIVE = 'GET_LIST_SHOWLIVE';

export const getListShowLive = () => {
  return dispatch => {
    // Loading
    dispatch({
      type: GET_LIST_SHOWLIVE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Api ShowLive
    axios({
      method: 'get',
      url: API_URL + '/sb-nyawer/live',
    }).then(response => {
      if (response.status !== 200) {
        // error
        dispatch({
          type: GET_LIST_SHOWLIVE,
          payload: {
            loading: false,
            data: false,
            errorMessage: response,
          },
        });
      } else {
        //   Success
        dispatch({
          type: GET_LIST_SHOWLIVE,
          payload: {
            loading: false,
            data: response.data ? response.data.data : [],
            errorMessage: false,
          },
        });
      }
    });
  };
};
