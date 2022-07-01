import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header'
import '../App.css'
import 'react-toastify/dist/ReactToastify.css';
import loginMiddle from '../redux/middleWares/loginMiddle';
import { connect } from 'react-redux';
import { WithRouter } from './layouts/withRouter/WithRouter'
import { toast, ToastContainer } from 'react-toastify';


 class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      loginData:{
        userName:'',
        password:''
      }
    }
  }

  handleLogin = (e) => {
    const {name,value} = e.target
    this.setState({
      loginData:{
        ...this.state.loginData,
        [name]:value
      }
    })
     console.log(this.state)
  }
  

  loginForm = (e) => {
    e.preventDefault()
    this.props.loginMiddle(this.state.loginData);
    
    setTimeout(()=>{
      let token = localStorage.getItem('token')
      let userData = localStorage.getItem('userData')
      if(token && userData){
        alert('login successfully')
        this.props.navigate('/getuser')
      }
    },1000)
    
    // (localStorage.getItem('token'))?this.props.navigate('/'):toast.error('Please Login')

  }
  
  render() {
    return (
        <>
          <Header />
          <div className='mt-5'>
            <form className='w-25 offset-4 border p-5'>
              <h3 className='App mb-4'>Login Form</h3>
              <input type="text" className='form-control mb-4' onChange={(e)=>{this.handleLogin(e)}} name="userName" placeholder='Enter UserName' />
              <input type="password" className='form-control' onChange={(e)=>{this.handleLogin(e)}} name="password" placeholder='Enter Password' />
              <div className='App mt-3'>
                <button type="submit" className='btn btn-success' onClick={(e)=>{this.loginForm(e)}}>User Login</button>
              </div>
            </form>
          </div>
          <ToastContainer  />
        </>
    )
  }
}
const  mapStateToProps = (state) => {
  // console.log(state.loginReducer.logindata)
   return {
     state:state.loginReducer.logindata
   } 
 }

 const mapDispatchToProps = (dispatch) => {
   return {
     loginMiddle:(login_data)=>{
     dispatch(loginMiddle(login_data))
    }
   }
}
export default connect(mapStateToProps,mapDispatchToProps) (WithRouter(Login)) ;