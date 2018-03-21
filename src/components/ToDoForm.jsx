import React from 'react';
import { reduxForm } from 'redux-form';

class ToDoForm extends React.Component {
  addTask = (values) => {
    console.log(values);
    this.props.addTask({ task: values })
  };
  render(){
    return <form action="" className="form-inline" onSubmit={ this.props.handleSubmit(this.addTask)}>
      <Field name="text" required component="input" type="text" />
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
  }
}

export default reduxForm({
  form: 'todoForm',
})(ToDoForm);