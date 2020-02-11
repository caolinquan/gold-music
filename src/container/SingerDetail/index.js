import React,{ Component } from 'react';
import "./SingerDetail.scss";
import Table from "@/components/Table";
import {connect} from "react-redux";
import { playLast,addMusic } from "@/store/actionCreators";
import { fakeSingerDetailData } from "@/api/fakeData";

class SingerDetail extends Component{
	state={
		name:"",
		imgUrl:"",
		desciption:"",
		list:[]
	}
	componentDidMount(){
        window.scrollTo(0,0);
        this.setState({...fakeSingerDetailData});
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
		const { name,desciption,imgUrl,list } = this.state;
		return (
				<div className="container-singerdetail">
					<div className="singerdetail-info">
						<div className="singerdetail-cover">
							<img src={imgUrl} alt=""/>
						</div>
						<div className="singerdetail-desc">
							<h1>{name}</h1>
							<p>{desciption}</p>
						</div>
					</div>
					<div className="singerdetail-content">
						<h2>热门歌曲</h2>
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
export default connect(null,mapDispatchToProps)(SingerDetail);