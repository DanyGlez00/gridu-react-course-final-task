import React from 'react';
import { useFormik } from 'formik';
import './SignUpForm.scss';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      fullname: '',
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
    <section className="signup">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h1 className='signup-form-title'>Sign up</h1>
        <label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Fullname"
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          {formik.errors.fullname ? <div>{formik.errors.fullname}</div> : null}
        </label>
        <button className='signup-form-button' type="submit">Sign up</button>
      </form>
      <p className="signup-existing-acc">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </section>
  );
};

export default SignUpForm;
