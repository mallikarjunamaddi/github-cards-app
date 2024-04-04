import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://avatars1.githubusercontent.com/u/810455?v=4" alt="User" />
                <div className="info">
                    <div>Name here...</div>
                    <div>Company here...</div>
                </div>
            </div>
        );
    }
}

export default Card;