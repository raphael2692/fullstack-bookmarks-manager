import { useState, useEffect } from "react";

// Utils
import { useForm } from "../utils/useForm";

// Ui
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function PostBookmark(props) {
  // POST
  const [values, handleChange] = useForm({ formName: "", formUrl: "" });

  const postBookmark = (params) => {
    fetch("http://localhost/bookmarks/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: params.formName,
        url: params.formUrl,
      }),
    });
  };

  return (
    <div>
      <Typography variant="h5">components/PostBookmark</Typography>
      <form>
        <TextField
          label="name"
          type="text"
          name="formName"
          value={values.formName}
          onChange={handleChange}
        />
        <br />

        <TextField
          label="url"
          type="text"
          name="formUrl"
          value={values.formUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          value="POST -> createBookmark"
          onClick={() => postBookmark(values)}
        >
          Add bookmark
        </Button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default PostBookmark;

//// vanilla html:
// return (
//     <div>
//       <h1>Bookmark component</h1>

//       <br />
//       <br />
//       <form >
//       <label>Bookmark Name: </label>
//       <input
//         type="text"
//         name="formName"
//         value={values.formName}
//         onChange={handleChange}
//       />
//       <br />
//       <label>Bookmark Url: </label>
//       <input
//         type="text"
//         name="formUrl"
//         value={values.formUrl}
//         onChange={handleChange}
//       />
//     <br/>
//       <input
//         type="submit"
//         value="POST -> createBookmark"
//         onClick={() => postBookmark(values)}
//       />
//       </form>
//     </div>
//   );
// }
