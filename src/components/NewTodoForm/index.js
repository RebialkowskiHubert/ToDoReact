import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #232632;
    color: #00A7FA;
    width: 80px;
    height: 32px;
    font-size: 1.7em;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextInput = styled.input`
    padding: 5px;
    font-size: .7em;
    background: #232632;
    color: #D3D4D6;
    width: 100%;
    margin-right: 7px;
    border: 0px;
    -webkit-appearance: none;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #343744;
    background: #232632;
    border-radius: 10px;
    padding: 5px;
`;

const NewTodoForm = ({onChange, onSubmit, draft}) => (
    <Container>
        <TextInput onChange={onChange} value={draft}></TextInput>
        <Button onClick={onSubmit}>+</Button>
    </Container>
)

export default NewTodoForm;