import React, { Component } from 'react';

import HomePage from './HomePage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="/auth/google">Sign in with Google</a>
        <HomePage />
      </div>
    );
  }
}

export default App;
