import React from 'react'

const Shimmer=()=>{
{
    
   return( 
    <div className="video-list">
    {Array(9)
      .fill("")
      .map((a,b) => {
        return (
          <div>
          <div key={b} className="shimmer"></div>
           <div key={b+"title"} className='title-shimmer'/>
           <div key={b+"views"} className='views-shimmer'/>
          </div>
        );
      })}
  </div>
    )
}
   
}

export default Shimmer;