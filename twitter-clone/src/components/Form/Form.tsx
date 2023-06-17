import React from 'react';
import { useFormik } from 'formik';
import Input, { InputProps } from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
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

    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('*Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .max(16, 'Must be shorter than 256 characters')
        .required('*Required'),
      ...(title === 'Sign up' && {
      fullname: Yup.string()
        .min(1, 'Must be longer than 1 character')
        .max(512, 'Must be shorter than 512 characters')
        .required('*Required'),
      username: Yup.string().required('*Required'),
      }),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const renderInputs = () =>
    inputs.map((input) => (
      <label key={input.name}>
        <Input
          className={`${formik.errors[input.name] && formik.touched[input.name] ? 'input-error' : 'input'}`}
          id={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[input.name]}
        />
        {formik.errors[input.name] && formik.touched[input.name] ? (
          <p className="form-required">{formik.errors[input.name]}</p>
        ) : null}
      </label>
    ));

  console.log(formik.errors);
  console.log(inputs)

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
