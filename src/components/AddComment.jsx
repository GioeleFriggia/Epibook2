import React from "react";

const CommentsList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          {/* Alcuni dettagli del commento qui */}
          <p>{comment.comment}</p>
          <button onClick={() => onDeleteComment(comment._id)}>
            Delete Comment
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
