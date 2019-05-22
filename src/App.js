import React from 'react';
import Navbar from './components/Nav'
import Home from './components/Home'
import Bio from './components/Bio'
import Articles from './components/Articles'
import Videos from './components/Videos'
import News from './components/News'
const App = ({}) => (
  <div>
    <Navbar/>
    <Home/>
    <Bio/>
    <Videos/>
    <News/>
    <Articles/>
  </div>
);

export default App;
