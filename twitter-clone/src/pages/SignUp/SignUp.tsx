import React from 'react';
import Form from '../../components/Form/Form';

const inputs = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
  {
    id: 'username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
  },
  {
    id: 'fullname',
    name: 'fullname',
    type: 'text',
    placeholder: 'Fullname',
  },
];

const SignUpForm = () => {
  return (
    <Form
      title="Sign up"
      paragraphText="Already have an account?"
      paragraphLink="Log in"
      inputs={inputs}
    />
  );
};

export default SignUpForm;
