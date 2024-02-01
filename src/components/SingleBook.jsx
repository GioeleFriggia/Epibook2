import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleCardClick = () => {
    setSelected(!selected);
  };

  return (
    <Card
      onClick={handleCardClick}
      style={{ border: selected ? "3px solid red" : "none" }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
      </Card.Body>
      {selected && <CommentArea book={book} />}
    </Card>
  );
};

export default SingleBook;
