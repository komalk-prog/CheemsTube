import React, { useEffect, useState } from 'react'
import Hamburger from "./../../images/menu.png"
import logoIcon from "../../images/youtubeIcon.png"
import userIcon from "./../../images/user.png"
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from "../../util/appSlice"
import cheemsLogo from "../../images/cheemsLogo.png"
import { cacheResults } from '../../util/searchSlice'
import { Link } from 'react-router-dom'



const Head = () => {

  const [searchQuery, setSearchQuery]=useState("");
  const [suggestions, setSuggestions]=useState();
  const [showSuggetions,setShowSuggetions]=useState(false);
 
  const dispatch=useDispatch();

  const searchCache=useSelector(store=>store.search);

  useEffect(()=>{
    //api call
    //make when key press if(time bwtn call<200ms)
    
   const timer=setTimeout(()=> {
    if(searchCache[searchQuery]){
      setShowSuggetions(searchCache[searchQuery]);
    }
    else{
    getSuggestionApi()
  }
  },200);

   //destroy previous call
    return ()=>{
      clearTimeout(timer);
    }

  },[searchQuery])



  const getSuggestionApi=async()=>{
    const data=await fetch("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery);
    const json=await data.json();
    dispatch(cacheResults({
      [searchQuery]:json[1],  // key:value state:action.payload
    }))
    setSuggestions(json[1]);
  }
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }



  return (
    <div className='head'>
    <div>
    <img 
      alt="menu"
      src={Hamburger}
      className="hambuger"
      onClick={()=>toggleMenuHandler()}
      />
<Link to="/">

    <img
      alt="youtube"
      src={logoIcon}
     
      className="logo-icon"
    />
   
    <img
      alt="cheemstube"
      src={cheemsLogo}
      className="cheems-icon"
    />
     </Link>
    </div>
    <div className='search'>
    <div>

    <input 
    type="text" 
    className='search-bar'
    value={searchQuery}
    onChange={(e)=>{setSearchQuery(e.target.value)}}
    onFocus={()=>{
      if(suggestions)
      setShowSuggetions(true)
      }}
    onBlur={()=>setShowSuggetions(false)}
    />
    <Link to={"/results?searchquery="+searchQuery}>
    <button className='search-btn'>
    <h3 className='search-emoji'>🔍</h3>
   
    </button>
    </Link>
    
        
    </div>
    {showSuggetions && suggestions?
    <div className='suggestion' >
    <ul>
      {suggestions.map((suggestion)=><div
       onMouseDown={(e)=>{
        setShowSuggetions(false);
        setSearchQuery(suggestion);
       }}><li 
      key={suggestion}>🔍 {suggestion}</li></div>)}
    </ul>
       
    </div>
    
    :null
    
}
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