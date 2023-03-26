import React from 'react'
import Hamburger from "./../images/menu.png"
import logoIcon from "../images/youtubeIcon.png"
import userIcon from "./../images/user.png"
import { useDispatch } from 'react-redux'
import {toggleMenu} from "../util/appSlice"
import cheemsLogo from "../images/cheemsLogo.png"


const Head = () => {

  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };



  return (
    <div className='head'>
    <div>
    <img 
      alt="menu"
      src={Hamburger}
      className="hambuger"
      onClick={()=>toggleMenuHandler()}
      />
<a href="/">

    <img
      alt="youtube"
      src={logoIcon}
     
      className="logo-icon"
    />
   
    <img
      alt="cheemstube"
      src={cheemsLogo}
      style={{width:"200px",height:"55px"}}
      className="cheems-icon"
    />
     </a>
    </div>
    <div className='search'>
    <input type="text" className='search-bar'/>

    <button className='search-btn'>
    <h3 className='search-emoji'>🔍</h3>
    </button>
    </div>

    

    <div className='profile'>

    </div>
    <img
      alt="user"
      src={userIcon}
      className="user-icon"
    />
    </div>
  )
};

export default Head;