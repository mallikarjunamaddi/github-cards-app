import React from "react";
import "./index.css"; // This is how we import CSS files in React.
import CardList from "./CardList";
import InputForm from './InputForm'

// Source Github API for below data https://api.github.com/users/mallikarjunamaddi
const userProfiles = [
    {id: 22195101, avatar_url: "https://avatars.githubusercontent.com/u/22195101?v=4", name: "Mallikarjuna Maddi", company: "@microsoft"},
    {id: 25254, avatar_url: "https://avatars.githubusercontent.com/u/25254?v=4", name: "TJ Holowaychuk", company: "Apex"},
];

class App extends React.Component {
    state = {
        profiles: userProfiles
    };

    handleInputFromSubmit = (user) => {
       this.setState(prevState => ({
         profiles: [...prevState.profiles, user]
       }));
    }

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <InputForm onSubmit={this.handleInputFromSubmit}/>
                <CardList users={this.state.profiles}/>
            </div>
        );
    }
}

export default App;