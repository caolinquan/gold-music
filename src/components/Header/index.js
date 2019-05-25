import React,{ Component } from 'react';
import "./Header.scss";
import { Input } from 'antd';
import {NavLink} from "react-router-dom";

const Search = Input.Search;

class Header extends Component {
	state = {
		currentKey: "discoverMusic",
		navItems:[
			{title:"发现音乐",key:"discoverMusic"},
			{title:"我的音乐",key:"myMusic"},
		],
		subNavItems: [
			{title:"首页",key:"home"},
			{title:"排行榜",key:"toplist"},
			{title:"歌单",key:"playList"},
			{title:"歌手",key:"singerlist"},
		],
	}
	render(){
		const { navItems,subNavItems } = this.state;
		return (
			<div className="m-head">
				<nav className="m-head-nav">
					<div className="m-head-logo">
						<h1>DreamMUSIC</h1>
					</div>
					{
						navItems.map((item,index)=>(
							<NavLink to={"/"+item.key} className="nav-item" activeClassName="nav-actived">
								{item.title}
							</NavLink>
						))
					//index==0? "nav-item active":"nav-item"
					}
					<div className="m-head-search">
						<Search
							placeholder="请输入关键词"
							// onSearch={  }
							style={{width:200}}/>
					</div>
				</nav>
				<nav className="m-head-subnav">
					{
						subNavItems.map((item)=>(
							<NavLink to={"/"+item.key} className="nav-item" activeClassName="nav-actived" >{item.title}</NavLink>
						))
					}
				</nav>
			</div>
		)
	}
}

export default Header;