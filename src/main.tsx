import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*

  1) Add an edit page
  2) Add more exercises options to create page 
  3) See if you can add any useMemo hooks 
  4) Add useContext to pass props
  5) Could clean up the app a little 
  6) Add some tests to it

  7) Start working on adding a backend ( maybe watch his other video for that )


  Look into open source with code sandbox example



*/
