import { combineReducers } from 'redux';
import ActionTypes from './actionTypes';
//allApps
const { INIT_SUCCESS,FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR } = ActionTypes;
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
const { ADD_MUSIC,PLAY_LAST,CHANGE_MUSICLIST } = ActionTypes;
const defaultMusic={
	audioLists:[{
      name: "Bedtime Stories",
      singer: "Jay Chou",
      cover: "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      musicSrc: "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"
    },
    {
      name: "难得",
      singer: "安来宁",
      cover: "http://cdn.lijinke.cn/nande.jpg",
      musicSrc: "http://cdn.lijinke.cn/nande.mp3"
    }],
}
function music(preState=defaultMusic,action){
	switch (action.type) {
		case ADD_MUSIC:
			return {
				...preState,
				audioLists:[...preState.audioLists,action.data],
			};
		case CHANGE_MUSICLIST:
			return {
				...preState,
				audioLists:[...action.data],
			}
		case PLAY_LAST:
			return {
				audioLists:[...preState.audioLists],
				playIndex:preState.audioLists.length-1,
			};
		default:
			return preState;
	}
}

const rootReducer = combineReducers({
	home,
	music,
})

export default rootReducer;