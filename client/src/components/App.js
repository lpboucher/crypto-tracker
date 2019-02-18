import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../ducks/auth';

import Header from './containers/Header';
import Login from './presentation/Login';
import DashboardContainer from './Dashboard/DashboardContainer';

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

function mapDispatchToProps(dispatch) {
  return {
      fetchUser: () => dispatch(fetchUser()),
  };
}

export default connect(null, mapDispatchToProps)(App);
