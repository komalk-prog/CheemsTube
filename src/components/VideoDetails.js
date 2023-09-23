import React, { useEffect, useState } from 'react'
import { VIDEO_DETAILS_FROM_ID } from '../util/constants';
import userIcon from "./../images/user.png";
import LikeIcon from "./../images/like.png";
import UnlikeIcon from "./../images/unlike.png"
import ShareIcon from "./../images/share.png";
import DownloadIcon from "./../images/download.png"
import { formatCountDifference, getDatetimeDifference } from '../helper';

const Details=({data})=>{
    const {snippet,statistics}=data;

    return(
        <div className='video-details'>
            <h3>{snippet?.title}</h3>
            <div>
            <img
            alt="user"
            src={userIcon}
            className="user-icon"
            />
            <h5>{snippet?.channelTitle}</h5>
            <button>Subscribe</button>
            </div>

            <div>

            <button className='like-button'><img alt="Like" src={LikeIcon} className='watchpage-icon'/> <span>{formatCountDifference(statistics?.likeCount)}</span></button>
            <button className='unlike-button'><img alt='Unlike' src={UnlikeIcon} className='watchpage-icon'/></button>
            <button className='watchpage-button'><img alt="Like" src={ShareIcon} className='watchpage-icon'/> Share</button>
            <button className='watchpage-button'><img alt="Like" src={DownloadIcon} className='watchpage-icon'/> Download</button>
            <div className='description'>
            <h5>{formatCountDifference(statistics.viewCount) }  {getDatetimeDifference(snippet.publishedAt)}</h5>
            
            

            </div>
            
            </div>
        </div>
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