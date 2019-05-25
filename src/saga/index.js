import { call,put,takeLatest,delay } from 'redux-saga/effects';
import { 
	INIT,
	initSuccess,
} from '../store/actions';
import {getInitData} from "../service";

function * fetchInitData()
{
	var initData = yield getInitData();
	yield put(initSuccess(initData));
}


export default function * rootSaga(){
	yield takeLatest(INIT,fetchInitData);
}