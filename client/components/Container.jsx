import React from 'react';

// my components
import Header from './Header';
import InputBox from './InputBox';
import ListTodo from './List';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: ['Sleep', 'Eat', 'Pray', 'Jump']
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  submitTodo(event) {
    const a = this.state.todos;
    a.push(this.state.todo);
    this.setState(prevState => ({
      todos: a
    }));
  }

  onChangeText(event) {
    console.log(event);
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="main">
        <Header />
        <InputBox
          name="todo"
          value={this.state.todo}
          onChange={this.onChangeText}
          className="input-box"
        />
        <ListTodo todos={this.state.todos} />
        <input type="submit" onClick={this.submitTodo} value="Do Something!" />
      </div>
    );
  }
}

export default Container;
