import React from "react";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList keyExtractor={(book) => book.asin} books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
