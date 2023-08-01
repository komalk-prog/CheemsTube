import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import { KEY } from '../util/constants';

const Categories = () => {
    
    const [videos, setVideos]=useState();
    //const [isAvailable,setIsAvailable] =useState(true);

    const {id} =useParams();

   let api="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&videoCategoryId="+id+"&regionCode=IN&key="+KEY;

  async function getVideo(){
   
    const VideoResponse= await fetch(api);
    const videoJson= await VideoResponse.json();
   setVideos(videoJson.items);


  }
    useEffect(()=>{
      getVideo();
    },[id]);
 

 
      
    if(!videos)
    return <h3 style={{marginLeft:"30%",marginTop:"10%"}}>NO VIDEOS AVAILABLE</h3>
  return (
  <div className='video-list'>
  
   {videos.map((video)=> <VideoCard key={video.snippet.title} video={video}/>)}
 

  </div>
    
  )
}

export default Categories