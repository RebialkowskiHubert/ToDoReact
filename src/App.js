import React, { Component } from 'react';

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

          {this.props.tasks.map(task => <p>{task}</p>)}

          <input onChange={this.updateDraft} value={this.state.draft}/>

          <button onClick={this.addToDo}>Dodaj</button>
        </div>
      )
  }
}

class App extends Component {
    myTasks = ['wtf', 'fff'];

    render() {
    return (
      <div>
        <ToDoList title="Moje obowiązki" tasks={this.myTasks} />
      </div>
    )
  }
}

export default App;
