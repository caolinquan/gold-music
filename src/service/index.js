import {initData} from "./fakeData";

function delay(time){
	return new Promise((resolve,reject)=>setTimeout(()=>resolve(),time));
}
export async function getInitData(){
	await delay(1000);
	console.log('sagaaaaa');
	return initData;
}