import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        Home
        <Outlet />
      </div>
    );
  }
}
