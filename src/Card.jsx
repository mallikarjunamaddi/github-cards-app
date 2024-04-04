import React from "react";

class Card extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <div className="github-profile">
                <img src={user.avatar_url} alt="User" />
                <div className="info">
                    <div>{user.name}</div>
                    <div>{user.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;