import {
  GET_TRANSACTIONS_WAITING,
  GET_TRANSACTIONS_APPROVAL,
  GET_TRANSACTIONS_DEAL,
  GET_TRANSACTIONS_HISTORY,
} from '../../actions/TransactionAction';

const initialState = {
  // waiting
  getdataTransactionWaitingLoading: false,
  getdataTransactionWaitingResult: false,
  getdataTransactionWaitingError: false,

  // approval
  getdataTransactionApprovalLoading: false,
  getdataTransactionApprovalResult: false,
  getdataTransactionApprovalError: false,

  // deal
  getdataTransactionDealLoading: false,
  getdataTransactionDealResult: false,
  getdataTransactionDealError: false,

  // history
  getdataTransactionHistoryLoading: false,
  getdataTransactionHistoryResult: false,
  getdataTransactionHistoryError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS_WAITING:
      return {
        ...state,
        getdataTransactionWaitingLoading: action.payload.loading,
        getdataTransactionWaitingResult: action.payload.data,
        getdataTransactionWaitingError: action.payload.errorMessage,
      };

    case GET_TRANSACTIONS_APPROVAL:
      return {
        ...state,
        getdataTransactionApprovalLoading: action.payload.loading,
        getdataTransactionApprovalResult: action.payload.data,
        getdataTransactionApprovalError: action.payload.errorMessage,
      };
    case GET_TRANSACTIONS_DEAL:
      return {
        ...state,
        getdataTransactionDealLoading: action.payload.loading,
        getdataTransactionDealResult: action.payload.data,
        getdataTransactionDealError: action.payload.errorMessage,
      };
    case GET_TRANSACTIONS_HISTORY:
      return {
        ...state,
        getdataTransactionHistoryLoading: action.payload.loading,
        getdataTransactionHistoryResult: action.payload.data,
        getdataTransactionHistoryError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
