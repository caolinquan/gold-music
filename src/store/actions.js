//actionType
export const INIT = "INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const GET_SWIPER = "GET_SWIPER";
export const GET_PANELDATA = "GET_PANELDATA";
export const GET_RANKLIST = "GET_RANKLIST";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

//actionsCreater
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
