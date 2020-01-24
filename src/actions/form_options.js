import fetch from 'isomorphic-fetch';
import { stringify } from 'querystring';
import { isEmpty, omit, values, has, map } from '../utils/lodash';
import { SET_FORM_OPTIONS } from 'constants';
import config from '../config.js';

const { host, access_token } = config.api.safe_harbor;

export function setFormOptions(options){
  let state_names = map(options.aggregations.state_names, obj => { 
    return optionObject(obj['key']);
  }).sort(propComparator('value', 'asc'));

  return {
    type: SET_FORM_OPTIONS,
    state_names: state_names
  };
}

export function requestFormOptions(){
  return (dispatch) => {
    return fetch(`${host}?size=1`, {
      headers: { 'Authorization': 'Bearer ' + access_token }
    })
        .then(response => response.json())
        .then(json => dispatch(setFormOptions(json)));
  };
}

function optionObject(val){
  return {label: val, value: val}
}

function propComparator(prop, order) {
  if (order === 'asc') {
    return function(a, b) {
      if (a[prop] < b[prop])
        return -1;
      if (a[prop] > b[prop])
        return 1;
      return 0;
    }
  }

  else if (order === 'desc') {
    return function(a, b) {
      if (a[prop] > b[prop])
        return -1;
      if (a[prop] < b[prop])
        return 1;
      return 0;
    }
  }
}