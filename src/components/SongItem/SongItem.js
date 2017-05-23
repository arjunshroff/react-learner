/**
 * Created by amahesh on 5/22/17.
 */
import React from "react";
import styles from "./SongItem.css"
const SongItem = (props) => {
    // const {son}
    return (<div className={styles.root}>
        <div>
            <img className={styles.image} ole="presentation"  src={props.track.album.images[0].url}></img>
            <span className={styles.albumName}>Name:{props.track.album.name}</span>
        </div>
        <div className={styles.songAndDescription}>
            <audio controls duration src={props.track.preview_url}></audio>
            <span className={styles.songDescription}>{props.track.name}</span>
            <span className={styles.songDescription}>{props.track.duration_ms / 1000}</span>

        </div>
    </div>);
};

export default SongItem;