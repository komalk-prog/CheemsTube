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
           <div className='title-shimmer'/>
           <div className='views-shimmer'/>
          </div>
        );
      })}
  </div>
    )
}
   
}

export default Shimmer;