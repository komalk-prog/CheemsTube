import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {
  
const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

if(!isMenuOpen) return null;

  return (
    <div className='sideBar'>
    <ul className='list'> 
      <li>Home</li>
      <li>Shorts</li>
      <li>subcriptions</li>
      <li>Library</li>
      <li>Live</li>
    </ul>
    <h3 className='sideBar-headings'>Subcriptions</h3>
    <ul className='list'> 
      <li>Trending</li>
      <li>Music</li>
      <li>Movie</li>
      <li>Gaming</li>
    </ul>
    <h3 className='sideBar-headings'>Watch Later</h3>
    <ul className='list'> 
      <li>Trending</li>
      <li>Music</li>
      <li>Movie</li>
      <li>Gaming</li>
    </ul>
    </div>
  )
}

export default SideBar;