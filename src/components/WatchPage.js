import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../util/appSlice';
import CommentsContainer from './CommentsContainer';
import RelatedVideos from './RelatedVideos';
import VideoDetails from './VideoDetails';


const WatchPage = () => {

  const [serachParam ]=useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(closeMenu());
    },[]);
   
  return (
    <div className='watch-page'>
    <div className='video-related-container'>
    <VideoDetails id={serachParam.get("v")}/>
    {/* <LiveChat/> */}
    <CommentsContainer id={serachParam.get("v")}/>
    </div>
    <RelatedVideos id={serachParam.get("v")}/>
    </div>
  )
};

export default WatchPage