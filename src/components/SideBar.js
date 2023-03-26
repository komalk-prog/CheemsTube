import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="sideBar">
      <ul className="list">
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/1946/1946488.png"}
          />
          Home
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/7887/7887862.png"}
          />
          Shorts
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/2989/2989849.png"}
          />
          subcriptions
        </li>
       
      </ul>

      <hr style={lineStyle} />
      <ul className="list">
      <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/2989/2989835.png"}
          />
          Library
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/2089/2089679.png"}
          />
          History
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/2859/2859706.png"}
          />
          Your videos
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/456/456257.png"}
          />
          Liked videos
        </li>
       
      </ul>
      <hr style={lineStyle} />
      <h3 className="sideBar-headings">Explore</h3>
      <ul className="list">
      <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/1942/1942144.png"}
          />
          Trending
        </li>
         
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/3049/3049365.png"}
          />
          Live
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/10172/10172321.png"}
          />
          Music
        </li>
        <li>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/1179/1179069.png"}
          />
          Movie
        </li>
        <li>
          <img src={"https://cdn-icons-png.flaticon.com/512/808/808476.png"} />
          Gaming
        </li>
      </ul>
    </div>
  );
};
const lineStyle = {
  color: "#000000",
  backgroundColor: "lightgray",
  height: 0.2,
  opacity: 0.5,
  marginBottom: "10px",
  width: "90%",
  marginLeft: "5%",
};
export default SideBar;
