import React, { useEffect, useState } from 'react'
import  YOUTUBE_VIDEOS_API from '../util/constants';
import Shimmer from './Shimmer';
import VideoCard from './VideoCard';


const VideoContainer = () => {
  
  const [videos, setVideos]=useState({});

  async function getVideo(){
    const VideoResponse= await fetch(YOUTUBE_VIDEOS_API);
   
    const videoJson= await VideoResponse.json();
   setVideos(videoJson.items);

  }
  useEffect(()=>{
    getVideo();
  },[]);

  if(true)
    return <Shimmer array={videos}/>;
  return (
  <div className='video-list'>
   {videos.map((video)=> <VideoCard key={video.snippet.title} video={video}/>)}
 

  </div>
    
  )
}

export default VideoContainer