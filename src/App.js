import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header/index';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <Route path="/" exact render={() => <div>Home</div>} />
          {/* 访问 /detail 的时候 “/” 也会被匹配上， 使用 exact 属性精准匹配 */}
          <Route path="/detail" exact render={() => <div>Detail</div>}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
