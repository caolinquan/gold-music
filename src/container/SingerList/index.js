import React,{ Component } from 'react';
import "./SingerList.scss";
import RectBox from "@/components/RectBox";
import {fakeSingerListData} from "@/api/fakeData";
import Api from "@/api";

const _letterlist = [
			{id:-100,name:"全部"},{id:-1,name:"A"},{id:-2,name:"B"},{id:-3,name:"C"},{id:-4,name:"D"},{id:-5,name:"E"},{id:-6,name:"F"},{id:-7,name:"G"},{id:-8,name:"H"},{id:-9,name:"I"},
			{id:-10,name:"J"},{id:-11,name:"K"},{id:12,name:"L"},{id:12,name:"M"},{id:12,name:"N"},{id:12,name:"O"},{id:12,name:"Q"},{id:12,name:"R"},{id:12,name:"S"},{id:12,name:"T"},
			{id:34,name:"U"},{id:34,name:"V"},{id:34,name:"W"},{id:34,name:"X"},{id:34,name:"Y"},{id:34,name:"Z"},
		]

class SingerList extends Component{
	state={
		activeTagIndex:[0,0,0],
		taglist:[],
		list:[]
	}
	async componentDidMount(){
        window.scrollTo(0,0)
        const res = await Api.get("/singer/");
        const {taglist,list} = res.data;
        this.setState({taglist:[_letterlist,...taglist],list});
    }
	onChangeTag= async (tagId,rowIndex,tagIndex)=>{
		const { activeTagIndex,taglist } = this.state;
		let arr = [...activeTagIndex];
		arr[rowIndex]=tagIndex;
		this.setState({activeTagIndex:arr});
		const {data} = await Api.get("/singer/query/",{
						letter_id:taglist[0][arr[0]].id,
						area_id:taglist[1][arr[1]].id,
						style_id:taglist[2][arr[2]].id
					});
		this.setState({list:data});
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
												onClick={this.onChangeTag.bind(this,tagObj.id, rowIndex, tagIndex)}
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