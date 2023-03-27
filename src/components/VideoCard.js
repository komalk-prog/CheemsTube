
import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {

  

     const {snippet ,statistics} =video;
     const {channelTitle,title, thumbnails}=snippet;

  return (
    <div className='videoCard'>
    <Link to={"/watch?v="+video.id}>
    <img alt="thumbnails" src={thumbnails.high.url} className="video-img"/>
    </Link>
    <ul className='video-detail'>
        <li><h4>{title}</h4></li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount+" views"}</li>
    </ul>
     
    </div>
  )
}

export default VideoCard;