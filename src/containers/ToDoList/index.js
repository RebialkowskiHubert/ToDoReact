import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem/index';
import NewTodoForm from '../../components/NewTodoForm/index';
import styled from 'styled-components';

const Container = styled.div`
  background: #2B2E39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

const Header = styled.h1`
  color: #FFF;
`;

class ToDoList extends Component {
  componentDidMount = () => {
   fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/VF3YDDMAC11179894?format=json')
    .then(resp => resp.json())
    .then(json => console.log(json));
  }

  static defaultProps = {
    tasks: [],
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
      <Container>
        <Header>{this.props.title}</Header>

        {this.props.tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}

        <NewTodoForm onSubmit={this.addToDo} onChange={this.updateDraft} draft={this.draft} />
      </Container>
    )
  }
}

export default ToDoList;