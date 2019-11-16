import React from 'react';

const NewTodoForm = ({onChange, onSubmit, draft}) => (
    <div>
        <input onChange={onChange} value={draft}/>
        <button onClick={onSubmit}>Dodaj</button>
    </div>
)

export default NewTodoForm;