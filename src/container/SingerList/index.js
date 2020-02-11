import React,{ Component } from 'react';
import "./SingerList.scss";
import RectBox from "@/components/RectBox";
import {fakeSingerListData} from "@/api/fakeData";
class SingerList extends Component{
	state={
		activeTagIndex:[0,0,0],
		taglist:[],
		list:[]
	}
	componentDidMount(){
        window.scrollTo(0,0)
        this.setState({...fakeSingerListData})
    }
	getData=(tagId,rowIndex,tagIndex)=>{
		let arr = [...this.state.activeTagIndex];
		arr[rowIndex]=tagIndex;
		this.setState({activeTagIndex:arr});
	}
	render(){
		const { activeTagIndex,taglist,list } = this.state;
		return (
				<div className="container-singerlist">
					<div className="singerlist-tag">
						{
							taglist.map((item,rowIndex)=>(
								<ul className="singerlist-tag-item">
									{
										item.map((tagObj,tagIndex)=>{
											let isActive="";
											if(tagIndex==activeTagIndex[rowIndex])
												isActive = "active";
											return (
												<li
												key={tagObj.id}
												className={isActive}
												onClick={this.getData.bind(this,tagObj.id, rowIndex, tagIndex)}
												>{tagObj.name}</li>
											)
										})
									}
								</ul>
							))
						}
					</div>
					<div className="singerlist-content">
						{
							list.map(item=>(
								<RectBox 
								title={item.name} 
								imgUrl={item.imgUrl} 
								url={"/singerdetail/"+item.id}
								size="large"
								></RectBox>
							))
						}
					</div>
				</div>
			)
	}
}
export default SingerList;