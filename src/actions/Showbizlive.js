import axios from 'axios';
import {API_URL, getData, getDataToken, storeData} from '../utils';

export const GET_LIST_SHOWLIVE = 'GET_LIST_SHOWLIVE';
export const LEADER_BOARD = 'LEADER_BOARD';

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

export const getLeaderBoard = (live_url, nyawer_id, is_private) => {
  return dispatch => {
    dispatch({
      type: LEADER_BOARD,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      // headers: {
      //   Authorization: 'Bearer ' + data.data.user.token,
      // },

      method: 'get',
      url: API_URL + '/order-service/leaderboard/' + nyawer_id,
    }).then(response => {
      // console.log(response.data.results);
      if (response.status == 200) {
        //ERROR
        dispatch({
          type: LEADER_BOARD,
          payload: {
            loading: false,
            data: false,
            errorMessage: response,
          },
        });
      } else {
        //BERHASIL
        dispatch({
          type: LEADER_BOARD,
          payload: {
            loading: false,
            data: response.data.results ? response.data.results : [],
            errorMessage: false,
          },
        });
      }
    });
  };
};
