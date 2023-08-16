import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../util/constants';
import Shimmer from './Shimmer';
import VideoCard from './VideoCard';
import { useSearchParams } from 'react-router-dom';

const SearchVideos = () => {

  const [videos, setVideos]=useState();
  
  const [serachParam ]=useSearchParams();

  async function getVideo(){
    const VideoResponse= await fetch(YOUTUBE_SEARCH_API+serachParam.get("searchquery"));
   
    const videoJson= await VideoResponse.json();
   setVideos(videoJson.items);
  }
    useEffect(()=>{
      getVideo();
    },[serachParam]);



  if(!videos)
    return <Shimmer />;
  return (
  <div className='video-list'>
   {videos.map((video)=> <VideoCard key={video.snippet.title} video={video}/>)}
 

  </div>
    
  )
}

export default SearchVideos