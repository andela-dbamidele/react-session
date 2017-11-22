import React from 'react';

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false
    }
  }

  reloadThis() {
    this.setState((prevState) => {
      reload: !prevState.reload
    });
  }

  componentWillMount() {
    console.log('=======>', this.props.todos);
  }

  render() {
    return (
      <div>
        <span> MY TODO LIST!!! </span>
        <ul>
          {this.props.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListTodo;
