import React from 'react'

const Shimmer=(array)=>{
{
    
   return( 
    <div className="video-list">
    {Array(10)
      .fill("")
      .map(() => {
        return (
          <div className="shimmer"></div>
        );
      })}
  </div>
    )
}
   
}

export default Shimmer;