import React from 'react';
import { useFormik } from 'formik';
import './Login.scss';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  return (
    <section className="login">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h1 className="login-form-title">Log in</h1>
        <label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        </label>
        <label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </label>
        <button className="login-form-button" type="submit">
          Sign up
        </button>
      </form>
      <p className="login-existing-acc">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </section>
  );
};

export default Login;
