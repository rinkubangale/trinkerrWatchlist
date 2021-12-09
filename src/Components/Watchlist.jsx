import React from "react";
import Search from "./Search";
import ListItem from "./ListItem";

export default function Watchlist() {
  return (
    <div>
      <h3 style={{ color: "#ccc" }}>Trinkerr Watchlist</h3>
      <Search />
      <hr />
      <ListItem />
    </div>
  );
}
