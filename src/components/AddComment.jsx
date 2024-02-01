import React, { useState } from "react";

const AddComment = ({ book, setComments }) => {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(1);

  const handleAddComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
          },
          body: JSON.stringify({
            comment: commentText,
            rate: rating,
            elementId: book.asin,
          }),
        }
      );

      if (response.ok) {
        const newComment = await response.json();
        setComments((prevComments) => [...prevComments, newComment]);
        setCommentText("");
        setRating(1);
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Inserisci il tuo commento..."
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {/* Opzioni per il voto da 1 a 5 */}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleAddComment}>Aggiungi commento</button>
    </div>
  );
};

export default AddComment;
