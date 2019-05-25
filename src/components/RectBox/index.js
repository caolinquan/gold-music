import React,{ Component } from 'react';
import "./RectBox.scss";

const RectBox = function(props){
	const { title,description,img } = props;
	return (
		<div className="m-rectbox">
			<div className="m-rectbox-portrait">
				<img src={img} alt=""/>
			</div>
			<h5 className="m-rectbox-title">{title}</h5>
			<p className="m-rectbox-description">{description}</p>
		</div>
	)
}

export default RectBox;