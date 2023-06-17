import React from 'react';
import Form from '../../components/Form/Form';
import Data from "./data.json"

const SignUpForm = () => {
  return (
    <Form
      title="Sign up"
      paragraphText="Already have an account?"
      paragraphLink="Log in"
      inputs={Data}
    />
  );
};

export default SignUpForm;
