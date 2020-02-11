import {initData} from "./fakeData";
import axios from "axios";
const path = "http://203.195.237.37:8081/queryContent/";
function delay(time){
	return new Promise((resolve,reject)=>setTimeout(()=>resolve(),time));
}
export async function getInitData(){
	return axios.get("http://localhost:8080/home/init")
	
}
async function getToplistData(key){
	await delay(1000);
	return "ok you get toplistdata " + key;
}
export default {
	getInitData,
	getToplistData,
}