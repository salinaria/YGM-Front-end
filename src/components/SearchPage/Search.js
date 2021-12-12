import React from "react";
import classes from "./Search.module.css";

const Search = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className={classes.style}>Search Site posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Movies"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default Search;