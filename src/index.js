import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import TodoList from "./TodoList";
import Animate from './Animate'

// PWA progressive web application
// 借助网页应用写手机 APP
// 应用部署到一台支持 https 协议的服务器上，访问完网页后，断网了，再次访问之前的网页也能访问到之前访问的网页
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<TodoList />, document.getElementById("root"));
ReactDOM.render(<Animate />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
