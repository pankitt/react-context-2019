import React, { Component } from 'react';
import '../styles.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/page5" component={Page5} />
          <Route path="/page6" component={Page6} />
        </Switch>
      </>
    );
  }
}

export default App;
