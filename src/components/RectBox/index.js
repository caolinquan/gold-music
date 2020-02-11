import React,{ Component } from 'react';
import "./RectBox.scss";
import {NavLink} from "react-router-dom";

const RectBox = function(props){
	const { title,description,imgUrl,url="/",size="" } = props;
	return (
		<div className="m-rectbox">
			<NavLink to={url}>
				<div className={"m-rectbox-portrait "+size}>
					<img src={imgUrl} alt=""/>
				</div>
				<h5 className="m-rectbox-title">{title}</h5>
				<p className="m-rectbox-description">{description}</p>
			</NavLink>
		</div>
	)
}

export default RectBox;