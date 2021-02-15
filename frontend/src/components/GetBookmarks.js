import React from "react";
import { useFetch } from "../utils/useFetch";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const GetBookmarks = (params) => {
  // GET
  const { data, loading } = useFetch(
    `http://localhost/bookmarks/?skip=0&limit=100`
  );
  // console.log(data);

  // DELETE
  async function deletePost(url) {
    await fetch(url, { method: "DELETE" }).then(window.location.reload());
  }

  // const renderLi = (array) =>
  //   array.map((el) => (
  //     <li key={el.id}>
  //       {el.name}, {el.url}
  //     </li>
  //   ));

  const renderTr = (array) =>
    array.map((el) => (
      <TableRow key={el.id}>
        <TableCell>{el.id}</TableCell>
        <TableCell>
          {" "}
          <a href={"//" + el.url} target="_blank">
            {el.name}
          </a>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletePost("http://localhost/bookmarks/" + el.id)}
          >
            DELETE
          </Button>
        </TableCell>
      </TableRow>
    ));

  if (data) {
    return (
      <div>
        <Typography variant="h5">components/GetBookmarks</Typography>
        <TableContainer component={Paper}>
          <Table className="BookmarksTable" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTr(data)}</TableBody>
          </Table>
          {/* {console.log(typeof data)} */}
        </TableContainer>
      </div>
    );
  }

  // return <div>{!data ? "loading..." : data}</div>;
  else {
    return "Loading data...";
  }
};

export default GetBookmarks;
