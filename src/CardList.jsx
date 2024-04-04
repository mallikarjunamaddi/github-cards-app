import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(userData => <Card user={userData} key={userData.name}/> )}
      </div>
    );
  }
}

export default CardList;