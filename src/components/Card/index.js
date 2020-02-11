import React from "react";
import "./Card.scss";
import {NavLink} from "react-router-dom";


const Card = function(props){
	const { title,description,imgUrl,url="/" } = props;
	return (
			<div className="m-card">
				<NavLink to={url}>
					<div className="img-wrap">
						<img className="" src={imgUrl} alt=""/>
					</div>
					<h5 className="m-card-title">{title}</h5>
					<p className="m-card-description">{description}</p>
				</NavLink>
			</div>
		)
}
export default Card;