import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageOne from './page/page-one';
import PageTwo from './page/page-two';
import PageList from './page/page-list';

import './App.css';

const testFunction = () => {
  return 'Текст из функции';
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/page1">Page-One</Link>
                </li>
                <li>
                  <Link to="/page2">Page-Two</Link>
                </li>
                <li>
                  <Link to="/page3">Page-List</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/page1">
                <PageOne />
              </Route>
              <Route path="/page2">
                <PageTwo storFun={ testFunction } />
              </Route>
              <Route path="/page3">
                <PageList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}

function Home() {
  return <h2>Home</h2>;
}

export default connect(
  state => ({
    testStore: state
  }),
  {
  }
)(App)
