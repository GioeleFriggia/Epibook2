import React, { useState, useEffect } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

export const Loading = () => <p>Loading...</p>;

export const Error = () => <p>Something went wrong. Please try again later.</p>;

const CommentArea = ({ book }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2I5NTE4N2U1YzAwMTgxNGM2MTEiLCJpYXQiOjE3MDY3ODk4MzYsImV4cCI6MTcwNzk5OTQzNn0.ILCS6jsNikZYMSEhi0iglv3e5qgnK52sJIKYJnc4E3I",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch comments. Status: ${response.status}`
          );
        }

        const data = await response.json();
        setComments(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchComments();
  }, [book.asin]);

  const handleDeleteComment = async (commentId) => {
    try {
      // Implementa la logica per cancellare il commento
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <>
          <CommentsList
            comments={comments}
            onDeleteComment={handleDeleteComment}
          />
          <AddComment book={book} setComments={setComments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
