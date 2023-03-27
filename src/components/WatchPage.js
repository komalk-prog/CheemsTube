import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../util/appSlice';


const WatchPage = () => {

  const [serachParam ]=useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(closeMenu());
    },[]);
   
  return (
    <div className='embbed-video'>
    <iframe 
    width="871px" 
    height="490px" 
    src={"https://www.youtube.com/embed/"+serachParam.get("v")}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
    </div>
  )
};

export default WatchPage