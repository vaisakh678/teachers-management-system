import React from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

function vacancy() {
  let top100Films = ["what", "the", "fuck"];
  return (
    <div>
      vacancy
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}

export default vacancy;
