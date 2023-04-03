import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../util/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './Live/LiveChat';


const WatchPage = () => {

  const [serachParam ]=useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(closeMenu());
    },[]);
   
  return (
    <div className='watch-page'>
    <div className='video-live-container'>
    <iframe 
   className='embbed-video'
    src={"https://www.youtube.com/embed/"+serachParam.get("v")}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
    
    <LiveChat/>
    </div>
    <CommentsContainer/>
    </div>
  )
};

export default WatchPage