import React, { Component } from 'react';

class ToDoEditForm extends Component {
    render() {
        return (
            <div>
                Edit form for {this.props.match.params.item_id}
            </div>
        )
    }
}

export default ToDoEditForm;