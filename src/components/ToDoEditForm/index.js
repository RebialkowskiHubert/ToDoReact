import React, { Component } from 'react';
import { get } from '../../helpers/carsApi';
import { Formik } from 'formik';

class ToDoEditForm extends Component {
    state = {
        toDoItem: null,
        fetched: false
    }

    componentDidMount = async() => {
        const toDoItem = await get("VF3YDDMAC11179894");

        this.setState({toDoItem, fetched: true})
    }

    render() {
        return (
            <div>
                Edit form for {this.props.match.params.item_id}
                { this.state.fetched ? 
                    <Formik
                        initialValues={{...this.state.toDoItem}}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        render = {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmiting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input name="content" onChange={handleChange} value={values.content} />
                                <br />
                                <button type="submit">Zaktualizuj</button>
                            </form>
                        )}
                    />
                    : <p>Wczytywanie...</p> 
                }
            </div>
        )
    }
}

export default ToDoEditForm;