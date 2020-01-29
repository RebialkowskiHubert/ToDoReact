import React, { Component } from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: palevioletred;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
        color: #fff;
    }
`;

const Item = styled.div`
    background: #343744;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 7px;
    color: ${props => props.done ? '#1FD84D' : 'auto'};
    text-decoration: ${props => props.done ? 'line-through' : 'auto'};
`;

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
        const { text, id } = this.props;

        return (
        <Item onClick={this.toggleDone} done={this.state.done}>
            {text}
            <StyledLink to={`/todo_items/${id}`}>Edytuj</StyledLink>
        </Item>
        )
    }
}
 
export default ToDoItem;