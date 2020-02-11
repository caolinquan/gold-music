import React,{ Component } from 'react';
import "./Header.scss";
import { Input } from 'antd';
import {NavLink,withRouter} from "react-router-dom";

const Search = Input.Search;

class Header extends Component {
	state = {
		activeNavIndex:0,
		activeSubNavIndex:0,
		currentKey: "discoverMusic",
		navItems:[
			{title:"发现音乐",key:"/discoverMusic"},
			{title:"我的音乐",key:"/myMusic"},
		],
		subNavItems: [
			{title:"首页",key:"/"},
			{title:"排行榜",key:"/toplist"},
			{title:"歌单",key:"/playList"},
			{title:"歌手",key:"/singerlist"},
		],
	}
	changeActiveNav=(type,index)=>{
		if(type=="nav")
			this.setState({activeNavIndex:index});
		else if(type=="subNav")
			this.setState({activeSubNavIndex:index});
	}
	componentDidMount(){
		const path = this.props.location.pathname;
		const { activeNavIndex,activeSubNavIndex,navItems,subNavItems } = this.state;

		if(navItems[activeNavIndex].key != path){
			navItems.forEach((item,index)=>{
				if(item.key == path)
					this.setState({activeNavIndex:index})
			})
		}
		if(subNavItems[activeSubNavIndex].key != path){
			subNavItems.forEach((item,index)=>{
				if(item.key == path)
					this.setState({activeSubNavIndex:index})
			})
		}
		
	}
	render(){
		const { activeNavIndex,activeSubNavIndex,navItems,subNavItems } = this.state;
		return (
			<div className="m-head">
				<nav className="m-head-nav">
					<div className="m-head-logo">
						<h1>GOLDMUSIC</h1>
					</div>
					{
						navItems.map((item,index)=>{
							let isActive = index==activeNavIndex? " nav-actived":"";
							return (
								<NavLink 
								key={index} 
								to={item.key} 
								className={"nav-item"+isActive} 
								onClick={this.changeActiveNav.bind(this,"nav",index)}>
									{item.title}
								</NavLink>
							)
						})
					//index==0? "nav-item active":"nav-item"
					}
					<div className="m-head-search">
						<Search
							placeholder="请输入关键词"
							// onSearch={  }
							style={{width:200}}/>
					</div>
				</nav>
				<nav className={"m-head-subnav" + (activeNavIndex==1? " hide":"")} >
					{
						subNavItems.map((item,index)=>{
							let isActive = index==activeSubNavIndex? " nav-actived":"";
							return (
								<NavLink 
								key={index} 
								to={item.key} 
								className={"nav-item"+isActive} 
								onClick={this.changeActiveNav.bind(this,"subNav",index)}>
									{item.title}
								</NavLink>
							)
						})
					}
				</nav>
			</div>
		)
	}
}

export default withRouter(Header);