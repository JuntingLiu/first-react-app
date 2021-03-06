import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import PostList from './pages/postList';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          {/* 访问 /detail 的时候 “/” 也会被匹配上， 使用 exact 属性精准匹配 */}
          {/* /detail/:id 只精准匹配 /detail/1 这种 */}
          <Route path="/detail/:id" exact component={Detail}/>
          {/* /detail 能匹配到 /detail?id=1 */}
          {/* <Route path="/detail" exact component={Detail}/> */}
          <Route path="/login" exact component={Login}/>
          <Route path="/write" exact component={Write}/>

          {/* 测试通用组件编写 */}
          <Route path="/postList" exact component={PostList}/>
        </Router>
      </Provider>
    );
  }
}

export default App;