import React from "react";
import { comment } from "../util/constants";

const Comment = ({ data }) => {
  return (
    <div className="comment">
      <h4>{data?.name}</h4>
      <p>{data?.text}</p>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if(!comments)
  return null;
  return comments.map((comment, i) => (
    <div>
      <Comment key={i} data={comment} />
      <div className="replies">
       <CommentsList comments={comment.replies}/>
      </div>
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
