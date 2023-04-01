import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../util/appSlice';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(toggleMenu());
  },[]);

   

  return (
    <div className='MainContainer'>
    <ButtonList/>
    <VideoContainer/>
    </div>
  )
};

export default MainContainer;