import {initData} from "./fakeData";
import axios from "axios";
const domain = "http://localhost:8080";
function delay(time){
	return new Promise((resolve,reject)=>setTimeout(()=>resolve(),time));
}

export function getInitData(){
	return axios.get(domain+"/home/init")
	
}

export function get(path,arg){
	console.log("arg",arg);
	return axios.get(domain+path,{
				params:arg,
			});
}
export default {
	getInitData,
	get,
}