import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import GetBookmarks from "./components/GetBookmarks.js";
import PostBookmark from "./components/PostBookmark.js";

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4">Bookmarks Manager v0.1</Typography>
        <hr />
        <br />

        <PostBookmark />
        <br />

        <GetBookmarks />
      </Container>
    </div>
  );
}

export default App;
