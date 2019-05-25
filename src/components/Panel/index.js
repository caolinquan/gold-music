import React from "react";
import "./Panel.scss";

const Panel = function(props){
	const { title,menuList,bgc,onMenuClick,children } = props;
	// console.log(props);
	return (
			<section className={`m-panel ${bgc==true? " grayBGC":""}`}>
				<h1 className="m-panel-title">{title}</h1>
				<ul className="m-panel-menu">
					{
						menuList!=null && menuList.map((item)=>(
							<li onClick={(e)=>onMenuClick(item.key)} key={item.key}>{ item.type }</li>
						))
					}
				</ul>
				{
					children
				}
			</section>
		)
}

export default Panel;