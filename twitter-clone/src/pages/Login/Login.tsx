import React from 'react';
import Form from '../../components/Form/Form';
import Data from "./data.json"

const Login = () => {
  return (
    <Form
      title="Login"
      paragraphText="Don't have an account?"
      paragraphLink="Sign up"
      inputs={Data}
    />
  );
};

export default Login;
