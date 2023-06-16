import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TweetCard from './components/TweetCard/TweetCard';
import Button from './components/Button/Button';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <div>
      {/* <Navbar/>
      <TweetCard/>
      <Button/> */}
      <SignUpForm/>
    </div>
  );
}

export default App;
