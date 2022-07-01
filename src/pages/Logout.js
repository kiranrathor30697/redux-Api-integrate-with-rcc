import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';
import { WithRouter } from './layouts/withRouter/WithRouter';

 class Logout extends Component {
  render() {
    return (
      <div>
        {
          setTimeout(()=>{
           let token = localStorage.getItem('token')
           let userData = localStorage.getItem('userData')
            if(token && userData){
              alert('Logut Successfully');
              this.props.navigate("/login")
            }
           token =  localStorage.removeItem('token');
           userData =  localStorage.removeItem('userData');
           localStorage.removeItem('update_data')

          },1000)
        }
      </div>
    );
  }
}
export default WithRouter(Logout)
