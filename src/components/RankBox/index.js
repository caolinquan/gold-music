import React from 'react';
import "./RankBox.scss";

const RankBox = function(props){
	const { title,list,img } = props;
	return (
			<div className="m-rankbox">
				<div className="m-rankbox-title">{title}</div>
				<ul className="m-rankbox-songlist">
					{
						list.map((item,index)=>(
							<li className="m-rankbox-song" key={index}>
								<div className="m-rankbox-number">{index+1}</div>
								<div className="m-rankbox-songName"><a href={item.songUrl}>{item.song}</a></div>
								<div className="m-rankbox-artist"><a href={item.artistUrl}>{item.artist}</a></div>
							</li>
						))
					}
				</ul>
			</div>
		)
}

export default RankBox;