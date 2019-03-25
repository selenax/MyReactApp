import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/landing" component={Landing} />
          </div>
        </BrowserRouter>

        <div />
      </div>
    );
  }
}

const AppWithRouter = withRouter(
  connect(
    null,
    actions
  )(App)
);
export default AppWithRouter;
