import {takeLatest, call, put,all} from 'redux-saga/effects';
import { HttpService } from '../../servies/httpServices';
import { LIST_COUNTRY, LIST_COUNTRY_NAME, LIST_COUNTRY_NAME_SUCCESS, LIST_COUNTRY_SUCCESS } from '../constants/constants';

function loadCountry (){
    let serv = new HttpService();
    let response = serv.getCountry().then(resp => resp.data);
    return Promise.resolve(response);
}

function getNameCountry(name, type){
    let serv = new HttpService();
    let response = serv.getCountryName(name, type).then(resp => resp.data);
    return Promise.resolve(response);
}

function* getCountrySuccessOutput(){
    try{
      const response = yield call(loadCountry);
      yield put ({
          type: LIST_COUNTRY_SUCCESS,
          payload: response
      })
    }catch(e){
      console.log("error",e)
    }
  }

  function* getNameCountrySuccessOutput(action){
    try{
      const response = yield call(getNameCountry,action.payload.countryName, action.payload.type);
      yield put ({
          type: LIST_COUNTRY_NAME_SUCCESS,
          payload: response
      })
    }catch(e){
      console.log("error ---> index page",e)
    }
  }

  function* getCountryInput(){
    yield takeLatest(LIST_COUNTRY, getCountrySuccessOutput);
  }

  function* getCountryNameInput(){
    yield takeLatest(LIST_COUNTRY_NAME, getNameCountrySuccessOutput);
  }

  export default function* rootSaga(){
    yield all([getCountryInput(), getCountryNameInput()]);
  } 