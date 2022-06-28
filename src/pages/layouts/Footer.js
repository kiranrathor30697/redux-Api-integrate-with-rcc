import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        Footer
        <Outlet />
      </div>
    );
  }
}
