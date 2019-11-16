import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem/index';
import NewTodoForm from '../../components/NewTodoForm/index';

class ToDoList extends Component {
    static defaultProps = {
      tasks: [
        {text: 'wtf', done: true}, 
        {text: 'fff', done: false}
      ],
      title: 'Moje obowiązki'
    }

    state = {
      tasks: this.props.tasks,
      draft: ''
    }

    updateDraft = event => {
      this.setState({draft: event.target.value});
    }

    addToDo = () => {
        const { tasks, draft } = this.state;

        const list = tasks;
        list.push({text: draft, done: false});

        this.setState({tasks: list, draft: ''});
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                {this.props.tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}

                <NewTodoForm onSubmit={this.addToDo} onChange={this.updateDraft} draft={this.draft} />
            </div>
      )
  }
}

export default ToDoList;