import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../util/constants';



const VideoContainer = () => {
 
  
  const [videos, setVideos]=useState();


  async function getVideo(){
    const VideoResponse= await fetch(YOUTUBE_VIDEOS_API);
   
    const videoJson= await VideoResponse.json();
    setVideos(videoJson.items);
  }
    useEffect(()=>{
      getVideo();
    },[]);



  if(!videos)
    return <Shimmer />;
  return (
  <div className='video-list'>
   {videos.map((video)=> <VideoCard key={video.snippet.title} video={video}/>)}
  </div>
    
  )
}

export default VideoContainer;