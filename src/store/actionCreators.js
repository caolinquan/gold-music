import ActionTypes from  "./actionTypes";
const {
	INIT,INIT_SUCCESS,FETCH_REQUEST,FETCH_SUCCESS,
	ADD_MUSIC,PLAY_LAST,CHANGE_MUSICLIST,
} = ActionTypes;
//actionsCreaters
export function init(){
	return {
		type:INIT,
	}
}
export function initSuccess(payload){
	return {
		type:INIT_SUCCESS,
		data:payload,
	}
}
export function fetchRequest(id)
{
	return {
		type:FETCH_REQUEST,
		id:id,
	}
}

export function fetchSuccess(data)
{
	return {
		type:FETCH_SUCCESS,
		data:data,
	}
}

export function addMusic(data){
	return {
		type:ADD_MUSIC,
		data:data,
	}
}
export function changeMusicList(data){
	return {
		type:CHANGE_MUSICLIST,
		data:data,
	}
}
//播放最后一个
export function playLast(data){
	return {
		type:PLAY_LAST,
		data:data,
	}
}

