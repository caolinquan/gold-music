import React from "react";
import "./Card.scss";


const Card = function(props){
	const { title,description,img } = props;
	return (
			<div className="m-card">
				<div className="img-wrap">
					<a href="">
						<img className="" src={img} alt=""/>
					</a>
				</div>
				<h5 className="m-card-title">{title}</h5>
				<p className="m-card-description">{description}</p>
			</div>
		)
}
export default Card;