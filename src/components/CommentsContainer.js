import React from "react";
import { comment } from "../util/constants";
import userIcon from "../images/user.png"

const Comment = ({ data }) => {
  return (
    <div className="comment">
         <img
      alt="user"
      src={userIcon}
      className="user-icon-comment"
    /><div>
      <h4>{data?.name}</h4>
      <p>{data?.text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div style={{padding:"5px"}}>
      
   <Comment key={i} data={comment} />
    {(comment.replies)?<>
      <div className="replies">
       <CommentsList comments={comment.replies}/>
      
      </div>
</>:null}
    </div>
  ));
};

const CommentsContainer = () => {
  const Comments = comment;

  return (
    <div>
      <h3>Comments :</h3>

      <CommentsList comments={Comments} />
    </div>
  );
};

export default CommentsContainer;
