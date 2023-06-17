import React from 'react';
import { useFormik } from 'formik';
import Input, { InputProps } from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Form.scss';

interface FormProps {
  title: string;
  paragraphText: string;
  paragraphLink: string;
  inputs: InputProps[];
}

interface FormikValues {
  [key: string]: string;
}

const Form = ({ title, paragraphText, paragraphLink, inputs }: FormProps) => {
  const formik = useFormik<FormikValues>({
    initialValues: inputs.reduce((values, input) => {
      return {
        ...values,
        [input.name]: '',
      };
    }, {}),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const renderInputs = () =>
  inputs.map((input) => (
      <label key={input.name}>
        <Input
          id={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          onChange={formik.handleChange}
          value={formik.values[input.name]}
        />
      </label>
    ));

  return (
    <section className="form">
      <form onSubmit={formik.handleSubmit} className="form-form">
        <h1 className="form-form-title">{title}</h1>
        {renderInputs()}
        <Button title={title} width="100%" type="submit" />
      </form>
      <p className="form-existing-acc">
        {paragraphText + ' '}
        <Link to={`/${paragraphLink.replace(/\s/g, '')}`}>{paragraphLink}</Link>
      </p>
    </section>
  );
};

export default Form;
