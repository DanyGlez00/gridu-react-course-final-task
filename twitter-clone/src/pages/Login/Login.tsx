import React from 'react';
import Form from '../../components/Form/Form';

const inputs = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];

const Login = () => {
  return (
    <Form
      title="Login"
      paragraphText="Don't have an account?"
      paragraphLink="Sign up"
      inputs={inputs}
    />
  );
};

export default Login;
