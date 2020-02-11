import React,{ Component } from 'react';
import "./SongDetail.scss";
import {connect} from "react-redux";
import { playLast,addMusic } from "@/store/actionCreators";
import { Button } from "antd";

class SongDetail extends Component{
	state={
		name: "Bedtime Stories",
      	singer: "Jay Chou",
      	imgUrl: "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      	musicSrc: "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"
	}
	componentDidMount(){
        window.scrollTo(0,0)
    }
	getData=(rowIndex,tagIndex)=>{
		
	}
	toPlay=(index)=>{
		this.props.addMusic(this.state);
		setTimeout(()=>{this.props.playLast();},0);
	}
	toAdd=(index)=>{
		this.props.addMusic(this.state);
	}
	onShare=(id)=>{

	}
	render(){
		const { name,singer,imgUrl,musicSrc } = this.state;
		return (
				<div className="container-songdetail">
					<div className="songdetail-info">
						<div className="songdetail-cover">
							<img src={imgUrl} alt=""/>
						</div>
						<div className="songdetail-desc">
							<h1>{name}</h1>
							<p><b>歌手：</b>{singer}</p>
							<div className="btn-group">
								<Button onClick={this.toPlay} className="btn" type="primary">播放</Button>
								<Button onClick={this.toAdd} className="btn" type="primary">加入歌单</Button>
							</div>
						</div>
					</div>
					<div className="songdetail-content">
						
					</div>
				</div>
			)
	}
}
const mapDispatchToProps = {
	playLast,
	addMusic,
}
export default connect(null,mapDispatchToProps)(SongDetail);