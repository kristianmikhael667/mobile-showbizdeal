import axios from 'axios';
import {API_URL, API_URL2} from '../utils/constant';

export const GET_MARKET_PLACE = 'GET_MARKET_PLACE';
export const GET_CATEGORY = 'GET_CATEGORY';

export const getMarketPlace = () => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_MARKET_PLACE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Market
    axios({
      method: 'get',
      url:
        API_URL2 +
        ':2001/business-service/v1/v2/vendor?category_id=138bb094-8aa2-4900-95c5-c0cd0b4fa3da',
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: GET_MARKET_PLACE,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: GET_MARKET_PLACE,
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
          type: GET_MARKET_PLACE,
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

export const getCategory = () => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //Get Category
    axios({
      method: 'get',
      url:
        API_URL +
        '/business-service/v1/multicategory?parentId=138bb094-8aa2-4900-95c5-c0cd0b4fa3da',
    })
      .then(responses => {
        if (responses.status !== 200) {
          //ERROR
          dispatch({
            type: GET_CATEGORY,
            payload: {
              loading: false,
              data: false,
              errorMessage: responses,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: GET_CATEGORY,
            payload: {
              loading: false,
              data: responses.data ? responses.data.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_CATEGORY,
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
