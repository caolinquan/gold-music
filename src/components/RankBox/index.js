import React from 'react';
import "./RankBox.scss";
import {NavLink} from "react-router-dom";

const RankBox = function(props){
	const { title,list,imgUrl } = props;
	return (
			<div className="m-rankbox">
				<div className="m-rankbox-title">{title}</div>
				<ul className="m-rankbox-songlist">
					{
						list.map((song,index)=>(
							<li className="m-rankbox-song" key={index}>
								<div className="m-rankbox-number">{index+1}</div>
								<div className="m-rankbox-songName">
									<NavLink to={"/songDetail/"+song.id}>{song.name}</NavLink>
								</div>
								<div className="m-rankbox-artist">
									<NavLink to={"/singerDetail/"+song.singerId}>{song.artist}</NavLink>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		)
}

export default RankBox;