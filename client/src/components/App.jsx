import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Landing from './Landing.jsx';
import NavBar from './NavBar.jsx';
// class Landing extends Component {
//   render() {
//     return (
//       <h2>
//         <NavLink to="/auth/google" activeClassName="active">
//           <span className="title">Search</span>
//           <span className="fa fa-star" />
//         </NavLink>
//       </h2>
//     );
//   }
// }
const Header = () => <h2>Header</h2>;
class App extends Component {
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

const AppWithRouter = withRouter(App);
export default AppWithRouter;
