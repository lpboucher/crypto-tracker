import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
import DashboardContainer from '../components/containers/DashboardContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            {/*<Route exact path="/" component={Landing} /> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={DashboardContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
