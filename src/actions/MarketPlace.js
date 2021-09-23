import axios from 'axios';
import {API_URL, API_URL2} from '../utils/constant';

export const GET_MARKET_PLACE = 'GET_MARKET_PLACE';
export const GET_MARKET_INFLUENCER = 'GET_MARKET_INFLUENCER';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_MANAGEMENT_PROFILE = 'GET_MANAGEMENT_PROFILE';
export const GET_PORTOPOLIO = 'GET_PORTOPOLIO';
export const GET_MANAGEMENT = 'GET_MANAGEMENT';
export const GET_RATING = 'GET_RATING';
// Performer
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
      url: API_URL2 + ':2001/business-service/v1/v2/vendor',
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

export const getMarketInfluencer = data => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_MARKET_INFLUENCER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Market
    axios({
      method: 'get',
      url: API_URL2 + ':2001/business-service/v1/v2/vendor?category_id=' + data,
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: GET_MARKET_INFLUENCER,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          // dispatch({
          //   type: GET_MARKET_INFLUENCER,
          //   payload: {
          //     loading: true,
          //     data: response.data ? response.data.data : [],
          //     errorMessage: false,
          //   },
          // });
          dispatch({
            type: GET_MARKET_INFLUENCER,
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
          type: GET_MARKET_INFLUENCER,
          payload: {
            loading: false,
            data: false,
            errorMessage: true,
          },
        });
        // alert('Your Connection is Invalid');
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
        // alert('Your Connection is Invalids');
      });
  };
};

export const getRating = id => {
  console.log(id);
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_RATING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //Get Rating
    axios({
      method: 'get',
      url: API_URL + '/product-service/rating/business/' + id,
    })
      .then(responses => {
        if (responses.data.message === 'success get data') {
          //BERHASIL
          dispatch({
            type: GET_RATING,
            payload: {
              loading: false,
              data: responses.data.results ? responses.data.results : [],
              errorMessage: false,
            },
          });
        } else {
          //ERROR
          dispatch({
            type: GET_RATING,
            payload: {
              loading: false,
              data: false,
              errorMessage: responses,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_RATING,
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

export const getManajemenProfileById = id => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_MANAGEMENT_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Manajemen
    axios({
      method: 'get',
      url: API_URL + '/business-service/v2/business/' + id + '/one',
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: GET_MANAGEMENT_PROFILE,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: GET_MANAGEMENT_PROFILE,
            payload: {
              loading: false,
              data: response.data.data ? response.data.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_MANAGEMENT_PROFILE,
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

export const getManajemenProfileId = id => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_MANAGEMENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Manajemen
    axios({
      method: 'get',
      url: API_URL + '/business-service/v2/business/' + id,
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: GET_MANAGEMENT,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: GET_MANAGEMENT,
            payload: {
              loading: false,
              data: response.data.data ? response.data.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_MANAGEMENT,
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

export const getPortofolio = id => {
  return dispatch => {
    //   Loading
    dispatch({
      type: GET_PORTOPOLIO,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Manajemen
    axios({
      method: 'get',
      url: API_URL + '/product-service/portofolio/business/' + id,
    })
      .then(response => {
        if (response.status !== 200) {
          //ERROR
          dispatch({
            type: GET_PORTOPOLIO,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          dispatch({
            type: GET_PORTOPOLIO,
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
          type: GET_PORTOPOLIO,
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
