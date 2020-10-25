/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <h1>Hello, electron!</h1>
    <p>Let's start building your awesome desktop app with electron and React!</p>
    <Link to="/todos">Todo</Link>
  </div>
);

export default Home;
