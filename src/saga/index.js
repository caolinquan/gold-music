import { call,put,takeLatest,delay } from 'redux-saga/effects';
import { initSuccess} from '@/store/actionCreators';
import ActionTypes from '@/store/actionTypes';
import Api from "@/api";
const { INIT } = ActionTypes;
function * fetchInitData()
{
	var initData = yield Api.getInitData();
	yield put(initSuccess(initData.data));
}


export default function * rootSaga(){
	yield takeLatest(INIT,fetchInitData);
}