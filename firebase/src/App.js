import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import ChatRoom from './pages/Chat'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/chatroom">
            <ChatRooms />
          </Route>
          <Route exact path="/chat">
            <ChatRoom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ChatRooms() {
  return <a href="/chat">main room</a>;
}
