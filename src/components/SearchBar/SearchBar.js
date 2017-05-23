/**
 * Created by amahesh on 5/19/17.
 */
import React from "react";
import styles from "./SearchBar.css"
const searchBar = (props) => (
    <div className={styles.root}>
        <input className={styles.input} onChange={(e) => props.songSearch(e.target.value)}/>
        <button className={styles.button} onClick={props.onSearch}>Search !!!</button>
    </div>
);

export default searchBar;