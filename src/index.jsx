import React from "react"; //import this to use JSX syntax.
import { createRoot } from "react-dom/client";
import App from "./App";

//render() renders react application inside the HTML element with id 'app'
const root = createRoot(document.getElementById("app"));
root.render(<App title="Github Cards App" />);