import { combineReducers } from 'redux';
import { INIT_SUCCESS,FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR } from './actions';
//allApps
function home(preAllApps={},action)
{
	switch (action.type) {
		case INIT_SUCCESS:
			return {
				...preAllApps,
				...action.data,
			};
		case FETCH_REQUEST:
			return {
				...preAllApps,
				isFetching:true,
			};
		case FETCH_SUCCESS:
			return {
				...preAllApps,
				appList:[...preAllApps.appList,action.data],
				isFetching:false,
			};
		case FETCH_ERROR:
			return {
				...preAllApps,
				isFetching:false,
			};
		default:
			return preAllApps;
	}
}


const rootReducer = combineReducers({
	home
})

export default rootReducer;