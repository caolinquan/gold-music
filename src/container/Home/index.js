import React,{ Component } from 'react';
import "./Home.scss";
import { connect } from 'react-redux';
import AppBox from '../../components/AppBox';
import { addApp,fetchRequest } from '../store/actions';
import Panel from "../../components/Panel";
import Card from "../../components/Card";
import RectBox from "../../components/RectBox";
import RankBox from "../../components/RankBox";
import {Carousel} from "antd";
import { init } from "../../store/actions";

class Home extends Component
{
	state = {
		isInit:false,
		recommandList:{},
		newSongsList:{},
		rankList:{},
		recommandActivedList:[],
		newSongsActivedList:[],
		rankActivedList:[],
	}
	componentDidMount(){
		this.props.init();
	}
	static getDerivedStateFromProps(nextProps,preState){
		if(nextProps.panelData && !preState.isInit){
			const  { panelRecommand,panelNewSongs,panelRankList } = nextProps.panelData;
			return {
				...preState,
				isInit:true,
				recommandList:panelRecommand,
				newSongsList:panelNewSongs,
				rankList:panelRankList,
				recommandActivedList:panelRecommand.menuList[0].list,
				newSongsActivedList:panelNewSongs.menuList[0].list,
				rankActivedList:panelRankList.list,
			}
		}
		return null;
	}
	handleRecommandClick=(typeKey)=>{
		const  { menuList } = this.state.recommandList;
		var result = menuList.find(item => item["key"] == typeKey).list;
		result && this.setState({recommandActivedList:result});
	}
	handleNewSongsListClick=(typeKey)=>{
		const  { menuList } = this.state.newSongsList;
		var result = menuList.find(item => item["key"] == typeKey).list;
		result && this.setState({newSongsActivedList:result});
	}
	handleRankListClick=(typeKey)=>{
		const  { list } = this.state.rankList;
		var result = list.find(item => item["key"] == typeKey).list;
		result && this.setState({rankActivedList:result});
	}
	render()
	{
		const { 
				recommandList,newSongsList,rankList,
				recommandActivedList,newSongsActivedList,rankActivedList,
			} = this.state;
		return(
			<div className="home">
				<Carousel effect="fade" autoplay>
					<div className="banner">1</div>
					<div className="banner">2</div>
					<div className="banner">3</div>
				</Carousel>
				<Panel {...recommandList} bgc onMenuClick={this.handleRecommandClick}>
					<div className="card-wrap">
						{
							recommandActivedList.map((item)=>(
								<Card className="m-card" {...item}></Card>
							))
						}
					</div>
				</Panel>
				<Panel {...newSongsList} onMenuClick={this.handleNewSongsListClick}>
					<div className="rectbox-wrap">
						{
							newSongsActivedList.map((item)=>(
								<RectBox className="m-rectbox" {...item}></RectBox>
							))
						}
					</div>
				</Panel>
				<Panel {...rankList} bgc>
					<div className="rectbox-wrap">
						{
							rankActivedList.map((item)=>(
								<RankBox {...item}></RankBox>
							))
						}
					</div>
				</Panel>
			</div>
			)
	}
}

const mapStateToProps = state =>{
	return { 
		swiper:state.home.swiper || [],
		panelData:state.home.panelData || null,
	}
}
const mapDispatchToProps = {
	init,
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);