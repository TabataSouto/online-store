import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline>
        <Router />
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
