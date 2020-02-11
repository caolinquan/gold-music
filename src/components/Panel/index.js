import React,{Component} from "react";
import "./Panel.scss";

class Panel extends Component{
	state = {
		activeIndex:0,
	}
	render(){
		const { activeIndex } = this.state;
		const { title,menuList,bgc,onMenuClick,children } = this.props;
		return (
				<section className={`m-panel ${bgc==true? " grayBGC":""}`}>
					<h1 className="m-panel-title">{title}</h1>
					<ul className="m-panel-menu">
						{
							menuList!=null && menuList.map((item,index)=>{
								let isActive = index==activeIndex? "active":"";
								return (
									<li
									className={isActive}
									onClick={(e)=>{
										this.setState({activeIndex:index});
										onMenuClick(item.id);
									}} 
									key={item.id}>{ item.name }</li>
								)
							})
						}
					</ul>
					{
						children
					}
				</section>
			)
	}
}

export default Panel;