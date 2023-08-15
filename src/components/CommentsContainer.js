import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../util/constants";
import userIcon from "../images/user.png"

const Comment = ({ data }) => {
  return (
    <div className="comment">
         <img
      alt="user"
      style={{borderRadius:"50%"}}
      src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
      className="user-icon-comment"
    /><div>
      <h4>{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>
      <p>{data?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  console.log(comments);

  return comments.map((comment, i) => (
    <div style={{padding:"5px"}}>
      <Comment key={i} data={comment} />
    </div>
  ));
};

const CommentsContainer = ({id}) => {
  const [Comments,setComments]=useState();

  async function getComments(){
    const CommentResponse= await fetch(YOUTUBE_COMMENTS_API+id);
   
    const CommentJson= await CommentResponse.json();
    setComments(CommentJson.items);
  }
    useEffect(()=>{
      getComments();
    },[]);


  if(!Comments)return null;
  console.log(Comments)
  
  return (
    <div>
      <h3>Comments :</h3>

      <CommentsList comments={Comments} />
    </div>
  );
};

export default CommentsContainer;
