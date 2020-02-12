import React,{ Component } from 'react';
import "./Home.scss";
import axios from "axios";
import { connect } from 'react-redux';
import AppBox from '@/components/AppBox';
import Panel from "@/components/Panel";
import Card from "@/components/Card";
import RectBox from "@/components/RectBox";
import RankBox from "@/components/RankBox";
import {Carousel} from "antd";
import { init } from "@/store/actionCreators";
import Api from "@/api";

const _tagRecommand = [
		{id:8,name:"嘻哈"},
		{id:9,name:"电子"},
		{id:10,name:"古典"},
		{id:11,name:"快乐"}
	];
const _tagNewSongs = [
		{id:13,name:"内地"},
		{id:14,name:"港台"},
		{id:15,name:"欧美"},
		{id:16,name:"日本"},
		{id:17,name:"韩国"}
	];

class Home extends Component
{
	state = {
		isInit:false,
		tagRecommand: _tagRecommand,
		tagNewSongs: _tagNewSongs,
		activedRecommandList:[],
		activedNewSongsList:[],
		activedTopList:[],
	}
	componentDidMount(){
		this.props.init();
	}
	static getDerivedStateFromProps(nextProps,preState){
		if(nextProps.activedRecommandList && !preState.isInit){
			const  { 
					activedRecommandList,activedNewSongsList,activedTopList 
				} = nextProps;
			return {
				...preState,
				isInit:true,
				activedRecommandList,
				activedNewSongsList,
				activedTopList,
			}
		}
		return null;
	}
	handleRecommandClick= async (typeId)=>{
		let res = await Api.get("/home/playlist/"+typeId);
		this.setState({activedRecommandList:[...res.data]})
	}
	handleNewSongsListClick= async (typeId)=>{
		let res = await Api.get("/home/newsongs/"+typeId);
		this.setState({activedNewSongsList:[...res.data]})
	}

	render()
	{
		const { 
				tagRecommand,tagNewSongs,
				activedRecommandList,activedNewSongsList,activedTopList
			} = this.state;
		return(
			<div className="home">
				<Carousel className="carousel" effect="fade" autoplay>
					<div className="banner"><img src={require("@/images/banner-1.jpg")} alt=""/></div>
					<div className="banner"><img src={require("@/images/banner-2.jpg")} alt=""/></div>
					<div className="banner"><img src={require("@/images/banner-3.jpg")} alt=""/></div>
				</Carousel>
				<Panel title="歌单推荐" menuList={tagRecommand} bgc onMenuClick={this.handleRecommandClick}>
					<div className="card-wrap">
						{
							activedRecommandList.map((item)=>(
								<Card 
								key={item.id} 
								className="m-card"
								url={"/playlistdetail/"+item.id} 
								title={item.title}
								description={item.viewcount}
								imgUrl={item.imgUrl}>
								</Card>
							))
						}
					</div>
				</Panel>
				<Panel title="新歌首发" menuList={tagNewSongs} onMenuClick={this.handleNewSongsListClick}>
					<div className="rectbox-wrap">
						{
							activedNewSongsList.map((item)=>(
								<RectBox 
								key={item.id} 
								className="m-rectbox"
								url={"/songDetail/"+item.id}
								title={item.name}
								description={item.artist}
								imgUrl={item.imgUrl}>
								</RectBox>
							))
						}
					</div>
				</Panel>
				<Panel title="排行榜"  bgc>
					<div className="rectbox-wrap">
						{
							activedTopList.map((item)=>(
								<RankBox 
								key={item.id} 
								title={item.title}
								list={item.list}>
								</RankBox>
							))
						}
					</div>
				</Panel>
			</div>
			)
	}
}

const mapStateToProps = ({home}) =>{
	console.log('state.home',home);
	return {
		carousel: home.carousel || null,
		activedRecommandList:home.activedRecommandList || null,
		activedNewSongsList:home.activedNewSongsList || null,
		activedTopList:home.activedTopList || null,
	};
}
const mapDispatchToProps = {
	init,
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);