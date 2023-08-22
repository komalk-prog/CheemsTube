import React from 'react'
import { Link } from 'react-router-dom';

const RelatedVideoCard = ({video}) => {
  
    const {snippet} =video;
    const {channelTitle,title, thumbnails}=snippet;
  return (
  <div className='related-videos-card'>
  <Link to={"/watch?v="+video.id}>
  <img alt="thumbnails" src={thumbnails.high.url} className="video-img"/>
  </Link>
  <ul className='video-detail'>
      <li><h4>{title}</h4></li>
      <li>{channelTitle}</li>
  </ul>
  </div>
  )
}



export default RelatedVideoCard