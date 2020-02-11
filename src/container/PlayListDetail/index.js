import React,{ Component } from 'react';
import "./PlayListDetail.scss";
import {connect} from "react-redux";
import { playLast,addMusic } from "@/store/actionCreators";
import Table from "@/components/Table";
import { fakePlayListDetailData } from "@/api/fakeData";
class PlayListDetail extends Component{
	state={
		name:"",
		user:"",
		imgUrl:"",
		desciption:"",
		list:[]
	}
	componentDidMount(){
        window.scrollTo(0,0);
        this.setState({...fakePlayListDetailData});
    }
	getData=(rowIndex,tagIndex)=>{
		
	}
	onPlay=(index)=>{
		this.props.addMusic(this.state.list[index]);
		setTimeout(()=>{this.props.playLast();},0);
	}
	onAdd=(index)=>{
		this.props.addMusic(this.state.list[index]);
	}
	onShare=(id)=>{

	}
	render(){
		const { name,user,desciption,imgUrl,list } = this.state;
		return (
				<div className="container-playlistdetail">
					<div className="playlistdetail-info">
						<div className="playlistdetail-cover">
							<img src={imgUrl} alt=""/>
						</div>
						<div className="playlistdetail-desc">
							<h1>{name}</h1>
							<p><b>用户：</b>{user}</p>
							<p><b>简介：</b>{desciption}</p>
						</div>
					</div>
					<div className="playlistdetail-content">
						<Table 
						data={list} 
						size="middle" 
						type={[,"歌曲","专辑",]}
						onPlay={this.onPlay}
						onAdd={this.onAdd}
						onShare={this.onShare}
						></Table>
					</div>
				</div>
			)
	}
}
const mapDispatchToProps = {
	playLast,
	addMusic,
}
export default connect(null,mapDispatchToProps)(PlayListDetail);