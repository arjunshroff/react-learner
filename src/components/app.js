import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import searchFromSpotify from "../utils/searchSpotify";
import SongItem from "./SongItem/SongItem";
import styles from './app.css'
import SongList from './SongList/SongList'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initialMessage: "hello",
            song: "",
            tracks:{},
            songPosition:0
        };
    }

    searchSpotify = () => {
        console.log(this.state.tracks);
        searchFromSpotify(this.state.song)
            .then(({tracks}) => {
                this.setState({tracks})
            });
    }

    render() {
        return <div className={styles.root}>
            <SearchBar onSearch={this.searchSpotify} songSearch={(value) => {
                this.setState({
                    song: value
                })
            }
            }/>
            {this.state.tracks.items && <SongItem track={this.state.tracks.items[this.state.songPosition]}/>}
            {this.state.tracks.items && <SongList listOfSongs={this.state.tracks.items} selectSong={(songPosition) => this.setState({songPosition})}/>}
        </div>
    }
}
