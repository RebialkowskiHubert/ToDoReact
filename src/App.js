import React, { Component } from 'react';
import ToDoList from './containers/ToDoList/index';
import ToDoEditForm from './components/ToDoEditForm/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact path='/' component={ToDoList} />
            <Route path='/todo_items/:item_id' component={ToDoEditForm} />
          </div>
        </Router>
    )
  }
}

export default App;
