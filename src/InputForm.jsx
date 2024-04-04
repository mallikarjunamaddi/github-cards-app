import React from 'react';
import axios from 'axios';

class InputForm extends React.Component {
    state = {
        userName: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                 type="text" 
                 placeholder="Github Username" 
                 required
                 value={this.state.userName}
                 onChange= {event => this.setState({userName: event.target.value}) }
                 />
                <button>Add Card</button>
            </form>
        )
    }
}

export default InputForm;