import React from 'react';

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false,
      todos: this.props.todos
    };
  }

  reloadThis() {
    this.setState(prevState => {
      reload: !prevState.reload;
    });
  }

  componentWillMount() {
    console.log('=======>', this.props.todos);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    });
    console.log('I came here');
  }

  render() {
    return (
      <div>
        <span> MY TODO LIST!!! </span>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListTodo;
