import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ToDoList from './containers/ToDoList/index';
import ToDoEditForm from './components/ToDoEditForm/index';
import NotFound from './components/NotFound/index';

const Container = styled.div`
  background: #2B2E39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

class App extends Component {
    render() {
      return (
        <Router>
          <Container>
            <Switch>
              <Route exact path='/' component={ToDoList} />
              <Route exact path='/todo_items/:item_id' component={ToDoEditForm} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Router>
    )
  }
}

export default App;
