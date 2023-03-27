import React from 'react'

const Shimmer=()=>{
{
    
   return( 
    <div className="video-list">
    {Array(10)
      .fill("")
      .map((a,b) => {
        return (
          <div key={b} className="shimmer"></div>
        );
      })}
  </div>
    )
}
   
}

export default Shimmer;