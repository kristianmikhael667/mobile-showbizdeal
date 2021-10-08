import axios from 'axios';
import {API_URL, getData, getDataToken, storeData} from '../utils';

export const GET_TRANSACTIONS_WAITING = 'GET_TRANSACTIONS_WAITING';
export const GET_TRANSACTIONS_APPROVAL = 'GET_TRANSACTIONS_APPROVAL';
export const GET_TRANSACTIONS_DEAL = 'GET_TRANSACTIONS_DEAL';
export const GET_TRANSACTIONS_HISTORY = 'GET_TRANSACTIONS_HISTORY';

export const getTransactions = token => {
  return dispatch => {
    // Loading waiting
    dispatch({
      type: GET_TRANSACTIONS_WAITING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Loading waiting
    dispatch({
      type: GET_TRANSACTIONS_APPROVAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Loading waiting
    dispatch({
      type: GET_TRANSACTIONS_DEAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Loading waiting
    dispatch({
      type: GET_TRANSACTIONS_HISTORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios.all([
      // Waiting
      axios({
        url:
          API_URL +
          '/transaction-service' +
          '?appStatus=waiting_approval&trxStatus=open&paymentStatus=waiting_payment',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        }),

      // Approval
      axios({
        url:
          API_URL +
          '/transaction-service' +
          '?appStatus=approve&trxStatus=open&paymentStatus=waiting_payment',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        }),

      // Deal
      axios({
        url:
          API_URL +
          '/transaction-service' +
          '?appStatus=approve&trxStatus=open&paymentStatus=PAID',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        }),

      // History
      axios({
        url:
          API_URL +
          '/transaction-service' +
          '?appStatus=approve&trxStatus=closed',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        }),
    ]);
  };
};
