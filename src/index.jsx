import React from "react"; //import this to use JSX syntax.
import ReactDOM from "react-dom"; //import this to render react application inside HTML element.
import App from "./App";

//render() renders react application inside the HTML element with id 'app'
ReactDOM.render(
    <App title="Github Cards App"/>,
    document.getElementById("app")
);