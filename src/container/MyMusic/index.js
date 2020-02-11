import React,{ Component } from 'react';
import "./MyMusic.scss";
import {Empty} from "antd";
class MyMusic extends Component{
	state={
		cover:"",
		name:"TONY",
		list:[],
	}

	render(){
		const { name,cover,list } = this.state;
		return (
			<div className="container-mymusic">
				<div className="mymusic-head">
					<div className="mymusic-info">
						<div className="mymusic-cover">
							<img src={cover} alt=""/>
						</div>
						<h1>{name}</h1>
					</div>
					<div className="mymusic-profile-nav">
						<ul>
							<li>喜欢歌曲</li>
							<li>最近播放</li>
							<li>收藏歌单</li>
						</ul>
					</div>
					<div className="bg-cover" style={{ backgroundImage:`url(${require("@/images/banner-2.jpg")})` }}></div>
				</div>
				<div className="mymusic-content">
					{
						(!list || list.length==0) && <Empty/>
					}
				</div>
			</div>
		)
	}
}
export default MyMusic;