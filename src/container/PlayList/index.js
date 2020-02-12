import React,{ Component } from 'react';
import "./PlayList.scss";
import { NavLink } from "react-router-dom";
import { Radio,Card,Empty } from "antd";
import { fakePlayListData } from "@/api/fakeData";
import Api from "@/api";

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Meta } = Card;
class PlayList extends Component{
	state={
		// activeIndex:[0,""],
		typelist:[],
		selectedTag:"全部歌单",
		displayList:[]
	}
	async componentDidMount(){
		const { data } = await Api.get("/playlist/");
        window.scrollTo(0,0);
        this.setState({typelist:[...data.typelist], displayList:[...data.list]});
        // const { typelist, list} = fakePlayListData;
        // this.setState({typelist:[...typelist], displayList:[...list]});
    }
	onChangeTag= async (tagId,tagName,e)=>{
		// let newData = this.state.list[type]||[];
		// console.log('newData: ',newData);
		// console.log({selectedType:type,activeIndex,displayList:newData});
		this.setState({selectedTag:tagName});
		let { data } = await Api.get("/playlist/"+tagId);
		this.setState({displayList:[...data]});
	}
	render(){
		const { typelist,selectedTag,displayList } = this.state;
		return (
				<div className="container-playlist">
					<div className="typelist">
					{
						typelist.map((item,rowIndex)=>(
							<div key={rowIndex} className="typelist-item">
								<h4 className="typelist-item-title">{item.type}</h4>
								<ul className="typelist-item-child">
									{
										item.taglist.map((tagObj,colIndex)=>{
											let isActive="";
											if(tagObj.name == selectedTag)
												isActive = "active";
											return (
												<li
												key={tagObj.id}
												className={isActive} 
												onClick={this.onChangeTag.bind(this,tagObj.id,tagObj.name)}
												>{tagObj.name}</li>
											)
											}
										)
									}
								</ul>
							</div>
						))
					}
					</div>
					<div className="playlist">
						<h2 className="playlist-title">{selectedTag}</h2>
						<div className="playlist-contentbox">
							{
								displayList.map(item=>(
									<div key={item.id} className="playlist-childbox">
										<Card
											className="playlist-child"
											hoverable
											// style={{width:240}}
											cover={
												<NavLink  to={"/playlistdetail/"+item.id}>
													<img className="playlist-childcover" src={item.imgUrl} alt=""/>
												</NavLink>
											}
										>
											<p><NavLink to={"/playlistdetail/"+item.id}>{item.title}</NavLink></p>
											<p><NavLink to={"/userdetail/"+item.user_id}>{item.username}</NavLink></p>
											<p>播放量：{item.viewcount}</p>
										</Card>
									</div>
								))
							}
							{
								(!displayList || displayList.length==0) && <Empty/>
							}
						</div>
					</div>
				</div>
			)
	}
}
export default PlayList;