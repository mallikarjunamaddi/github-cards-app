import React from "react";
import "./index.css"; // This is how we import CSS files in React.
import Card from "./Card";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

export default App;