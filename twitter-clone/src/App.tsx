import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TweetCard from './components/TweetCard/TweetCard';
import Button from './components/Button/Button';
import SignUp from './pages/SignUp/SignUp';
import Form from './components/Form/Form';
import Login from './pages/Login/Login';
import Input from './components/Input/Input';
// import './_variables.scss';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <TweetCard/> */}
      {/* <Button title='Tweet' width='50%' type='submit'/> */}
      {/* <SignUp/> */}
      <Login/>
      {/* <Form title="Sign up" paragraphText="Don't have an account?" inputs={inputs} /> */}
    </div>
  );
}

export default App;
