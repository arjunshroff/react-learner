/**
 * Created by amahesh on 5/22/17.
 */
import React from 'react'
import styles from './SongList.css'

const eachSong = (props) => {
    const albumImage = props.album.images[0];
    return (
        <div className={styles.eachSong}>
            <img role="presentation" src={props.album.images[0].url} className={styles.image}> </img>
            <span className={styles.songDescription}>Name: {props.name}</span>
        </div>

    )
}
const SongList = (props) => (
    <div className={styles.root}>
        {props.listOfSongs.map((songData,index) => <div key={songData.uri} onClick={() => props.selectSong(index)}>
            {eachSong(songData)}
        </div>)}
    </div>
);

export default SongList;