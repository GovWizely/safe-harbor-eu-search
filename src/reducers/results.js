import { REQUEST_RESULTS, RECEIVE_RESULTS, RECEIVE_FAILURE } from '../constants';
import { assign } from '../utils/lodash';

export default (state = {
  isFetching: false,
  items: [],
  invalidated: false,
  total: 0,
}, action) => {
  switch (action.type) {
  case REQUEST_RESULTS:
    return assign({}, state, {
      isFetching: true,
      invalidated: false,
    });
  case RECEIVE_RESULTS:
    return assign({}, state, {
      isFetching: false,
      invalidated: false,
      items: action.payload.results,
      total: action.payload.total,
    });
  case RECEIVE_FAILURE:
    return assign({}, state, {
      isFetching: false,
      invalidated: false,
      error: action.error,
    });
  default:
    return state;
  }
};
