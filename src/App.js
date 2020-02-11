import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from '@/container/Home';
import SingList from '@/container/SingerList';
import PlayList from '@/container/PlayList';
import TopList from '@/container/TopList';
import SingerDetail from '@/container/SingerDetail';
import PlayListDetail from '@/container/PlayListDetail';
import MyMusic from '@/container/MyMusic';
import SongDetail from "@/container/SongDetail";
import Player from "@/container/Player";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header></Header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/discovermusic" component={Home}></Route>
          <Route path="/singerlist" component={SingList}></Route>
          <Route path="/playlist" component={PlayList}></Route>
          <Route path="/toplist" component={TopList}></Route>
          <Route path="/singerdetail/:id" component={SingerDetail}></Route>
          <Route path="/playlistdetail/:id" component={PlayListDetail}></Route>
          <Route path="/SongDetail/:id" component={SongDetail}></Route>
          <Route path="/mymusic" component={MyMusic}></Route>
        </Switch>
        <Player></Player>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
