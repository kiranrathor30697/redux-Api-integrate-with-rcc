import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';

export default class Logout extends Component {
  render() {
    return (
      <div>
        <Header />
        Logout
        <Outlet />
      </div>
    );
  }
}
