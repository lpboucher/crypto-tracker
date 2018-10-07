import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Test = () => <h2>Test</h2>
const Road = () => <h2>Moved</h2>

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Test} />
            <Route path="/moving" component={Road} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
