import React,{ Component } from 'react';
import "./TopList.scss";
import {List,Skeleton,Avatar,Layout,Row,Col,Empty} from "antd"; 
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import { playLast,addMusic } from "@/store/actionCreators";
import Table from "@/components/Table";
import Api from "@/api";
import {fakeTopListData} from "@/api/fakeData";

const sideNav = [
	{id:1,title:"流行指数榜"},{id:2,title:"热歌榜"},{id:3,title:"新歌榜"},{id:4,title:"MV榜"},
	{id:5,title:"内地榜"},{id:6,title:"欧美榜"},{id:7,title:"韩国榜"},{id:8,title:"日本榜"},
]

const { Sider,Content } = Layout; 

class TopList extends Component{
	state = {
		activeNavIndex:0,
		nav:sideNav,
		list:[],
		selectedTop:"",

	}
	componentDidMount(){
		this.setState({ ...fakeTopListData });
	}
	getData=(index)=>{
		const {id,title} = this.state.nav[index];
		this.setState({
			activeNavIndex:index,
			selectedTop:title,
			// list:list,
		});
	}
	onPlay=(index)=>{
		this.props.addMusic(this.state.list[index]);
		setTimeout(()=>{this.props.playLast();},0);
	}
	onAdd=(index)=>{
		this.props.addMusic(this.state.list[index]);
	}
	render(){
		const { activeNavIndex,list,nav,selectedTop } = this.state;
		return (
				<div className="main">
					<Layout style={{ padding:'24px 0',background:'#fff',margin:'0 220px' }} >
						<Sider width={180} style={{ background:'#fff' }}>
							<div className="toplist-nav">
								<ul>
									{
										nav.map((item,index)=>{
											let isActive = index==activeNavIndex? " active":"";
											return (
												<li 
												key={item.id} 
												className={"toplist-nav-item"+isActive}
												onClick={e=>this.getData(index)}
												>{item.title}</li>
											)
										})
									}
								</ul>
							</div>
						</Sider>
						<Content style={{ padding:'0 30px', minHeight: 600,height:'auto' }}>
							<div className="toplist">
								<h1 style={{ fontSize:25, }}>{selectedTop}</h1>
								<Table 
								data={list} 
								type={[,"歌曲","歌手",]}
								onPlay={this.onPlay}
								onAdd={this.onAdd}
								></Table>
								{
									(!list || list.length==0) && <Empty/>
								}
							</div>
						</Content>
					</Layout>
				</div>
			)
	}
}

const mapDispatchToProps = {
	playLast,
	addMusic,
}
export default connect(null,mapDispatchToProps)(TopList);