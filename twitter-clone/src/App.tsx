import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TweetCard from './components/TweetCard/TweetCard';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Navbar/>
      <TweetCard/>
      <Button/>
    </div>
  );
}

export default App;
