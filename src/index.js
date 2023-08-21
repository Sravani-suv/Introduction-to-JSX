// Acquire dependencies from Dependencies
import React from "react";
import ReactDOM from "react-dom";
//ReactDom.render(what to show,where to show);
//document.getElementById("root") is for getting the root div into the react-dom as address
//React works by creating JSX files
//JSX files are where html code written in the body
//Then compiled into Javascript by compiler
//Babel is js compiler
//Babel converts next gen or updated JS to actual line of JS Code can be shown in any browser
//ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a Paragraph</p>
  </div>,
  document.getElementById("root")
);
