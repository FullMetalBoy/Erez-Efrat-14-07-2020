import React from 'react';
import { Field, reduxForm } from 'redux-form';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderField = Component => ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <Component selected={input.value} {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const renderInput = renderField('input');

const renderDatepicker = renderField(DatePicker);

const ItemForm = props => {
  const onSubmit = formValues => {
    props.onSubmit(formValues);
    props.reset();
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="name" component={renderInput} label="Item Name" />
      <Field name="store" component={renderInput} label="Store Name" />
      <Field name="price" component={renderInput} label="Price (USD)" />
      <Field
        name="estDeliveryDate"
        component={renderDatepicker}
        label="Est. Delivery Date"
        dateFormat="DD-MM-YYYY"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter an item name';
  }

  if (!formValues.store) {
    errors.store = 'You must enter a store name';
  }

  if (!formValues.price) {
    errors.price = 'You must enter a price';
  }

  if (formValues.price && isNaN(Number(formValues.price))) {
    errors.price = 'You must enter a valid price';
  }

  if (!formValues.estDeliveryDate) {
    errors.estDeliveryDate = 'You must select a date';
  }

  return errors;
};

export default reduxForm({
  form: 'itemForm',
  validate
})(ItemForm);
