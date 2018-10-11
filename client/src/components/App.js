import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import CoinWrapper from './CoinWrapper';

const Test = () => <h2>Test</h2>
const Road = () => <h2>Moved</h2>

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
            <CoinWrapper />
            <Route exact path="/" component={Test} />
            <Route path="/moving" component={Road} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
