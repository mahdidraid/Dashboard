import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import "./tobbar.css";

export default function Tobbar() {
  return (
    <div>
      <header>
        <img className="logo" src={require("./ping-pong-logo3.png")} alt="logo" />
        
        <form>
          <div className="search">
            <label htmlFor="site-search"></label>
            <div className="search-container">
              <input type="text" placeholder="Search" id="site-search" name="q" />
              <FontAwesomeIcon className="i" icon={faSearch} style={{ color: "#5AE4A7" }} />
            </div>
          </div>
        </form>
        
        <div className="icon">
          <FontAwesomeIcon icon={faBell} style={{ color: "#5AE4A7" }} />
        </div>
      </header>
    </div>
  );
}
