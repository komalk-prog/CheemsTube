import React, { useEffect, useState } from 'react'
import { YOUTUBE_RELATED_VIDEOS_API} from '../util/constants';
import RelatedVideoCard from './RelatedVideoCard';

const RelatedVideos = ({id}) => {
    const [relatedVideos,setRelatedVideo]=useState();

    async function getRelatedVideo(){

        const RelatedVideoResponse= await fetch(YOUTUBE_RELATED_VIDEOS_API+id);
        //  console.log(YOUTUBE_RELATED_VIDEOS_API+id);
    
        const relatedVideoJson= await RelatedVideoResponse.json();

        setRelatedVideo(relatedVideoJson.items)
    }

    useEffect(()=>{
        getRelatedVideo();
    },[]);

  if(!relatedVideos)
    return null;

  return (
    <div className='related-videos'>
    <div>
    <h3>Related Videos :</h3>
    {relatedVideos.map((relatedVideo)=> <RelatedVideoCard key={relatedVideo.snippet.title} video={relatedVideo} />)}
    </div>
    </div>
  )
}

export default RelatedVideos