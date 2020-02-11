import React,{Component} from "react";
import ReactJkMusicPlayer  from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import options from "./options"
import { connect } from 'react-redux';
import { changeMusicList } from "@/store/actionCreators";

class Player extends Component{

	onAudioListsChange = (currentPlayId, newAudioLists, audioInfo)=>{
		const { audioLists,changeMusicList } = this.props;
		if(newAudioLists.length != audioLists.length)
	    	changeMusicList(newAudioLists);
	};
	onAudioAbort=(e)=>{
	    this.props.changeMusicList([]);
	};
	componentWillReceiveProps(nextProps){
		console.log('nextProps: ',nextProps);
	}
	render(){
		const { audioLists,playIndex } = this.props;
		return (
			<div className="player">
				<ReactJkMusicPlayer 
				{...options} 
				audioLists={audioLists}
				onAudioListsChange={this.onAudioListsChange}
				onAudioAbort={this.onAudioAbort}
				playIndex={playIndex} />
			</div>
		)
	}
}

const mapStateToProps = state =>{
	console.log('musiclist: ',state.music.audioLists);
	return {
		playIndex: state.music.playIndex,
		audioLists: state.music.audioLists,
	};
}
const mapDispatchToProps = {
	changeMusicList,
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);