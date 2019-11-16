import React, { Component } from 'react';
import './App.css';

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({done: !this.state.done});
  }

  render() {
    const { text } = this.props;

    return (
      <div onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
        <p>{text}</p>
      </div>
    )
  }
}

class ToDoList extends Component {
    state = {
      tasks: this.props.tasks,
      draft: ''
    }

    updateDraft = event => {
      this.setState({draft: event.target.value});
    }

    addToDo = () => {
      const list = this.state.tasks;
      list.push(this.state.draft);

      this.setState({tasks: list, draft: ''});
    }

    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>

          {this.props.tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}

          <input onChange={this.updateDraft} value={this.state.draft}/>

          <button onClick={this.addToDo}>Dodaj</button>
        </div>
      )
  }
}

class App extends Component {
    myTasks = [
      {text: 'wtf', done: true}, 
      {text: 'fff', done: false}
    ];

    render() {
    return (
      <div>
        <ToDoList title="Moje obowiązki" tasks={this.myTasks} />
      </div>
    )
  }
}

export default App;
