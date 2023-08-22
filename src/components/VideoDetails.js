import React, { useEffect, useState } from 'react'
import { VIDEO_DETAILS_FROM_ID } from '../util/constants';

const Details=({data})=>{
   
    return(
        <>
            <h3>{data?.snippet?.title}</h3>
            
        </>
    );
};

const VideoDetails = ({id}) => {

    const [videoDetails,setVideoDetails]=useState();

    async function getVideoDetails(){
        const VideoDetailsResponse= await fetch(VIDEO_DETAILS_FROM_ID+id);
        
        const VideoDetailsJson= await VideoDetailsResponse.json();
        setVideoDetails(VideoDetailsJson.items[0]);
        
         
    }

    useEffect(()=>{
        getVideoDetails();
        },[]);

        if(!videoDetails)
        return null;

  return (
    <>
    <div className='video-details'>
    <iframe 
   className='embbed-video'
    src={"https://www.youtube.com/embed/"+id}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
   </div>
   <div className='detailsVideo'>
   <Details data={videoDetails}/>
   </div>
   </>
  )
}

export default VideoDetails