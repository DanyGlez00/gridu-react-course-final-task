import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TweetCard from './components/TweetCard/TweetCard';

function App() {
  return (
    <div>
      <Navbar/>
      <TweetCard/>
    </div>
  );
}

export default App;
