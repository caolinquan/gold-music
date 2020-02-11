import React,{ Component } from 'react';
import "./Table.scss";
import {Row,Col,Avatar} from "antd";
import {NavLink} from "react-router-dom";

const Table = function({type=[],data,size="",onPlay,onAdd,onShare}){
	return (
		<div className="m-table">
			<Row className={"m-table-row " + size} align="middle" type="flex" >
				<Col span={4}>{type[0]}</Col>
				<Col span={8}>{type[1]}</Col>
				<Col span={4}>{type[2]}</Col>
				<Col span={6}>{type[3]}</Col>
			</Row>
	   		{
	   			data.map((item,index)=>(
	   				<Row key={index} className={"m-table-row " + size} align="middle" type="flex" >
	   					<Col className="m-table-row-num" span={4}>{index+1}</Col>
						<Col span={8}>
							<NavLink to={"/songdetail/"+item.id}>
								{item.imgUrl && <Avatar style={{ marginRight:20}} size={64} src={item.imgUrl}/>}
								<span style={{fontSize: 16}}>{item.name}</span>
							</NavLink>
						</Col>
						<Col span={4}>{item.album || item.singer}</Col>
						<Col span={6}>
							<span onClick={onPlay&&onPlay.bind(this,index)} className="btn-play">播放</span>
							<span onClick={onAdd&&onAdd.bind(this,index)} className="btn-add">添加歌单</span>
							<span onClick={onShare&&onShare.bind(this,index)} className="btn-share">分享</span>
						</Col>
	   				</Row>
	   			))
	   		}
		</div>
	)
}
export default Table;