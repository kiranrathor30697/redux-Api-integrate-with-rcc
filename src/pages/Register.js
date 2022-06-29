import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import registerMiddle from '../redux/middleWares/registerMiddle';
import Header from './layouts/Header';

 class Register extends Component {

  constructor(props){
    super(props)
    this.state={
      reg_data:{
        userName:'',
        email:'',
        profilePic:'',
        password:'',
        confirmPassword:''
      }
    }
  }

  handleRegister = (e) => {
    const {name,value} = e.target
    this.setState({
      reg_data:{
        ...this.state.reg_data,
        [name]:value
      }      
    })
  }
  RegisterForm = (e) => {
    e.preventDefault()
    let token = localStorage.getItem('token')  
    // console.log(this.props)
    this.props.registerMiddle(this.state.reg_data,token)
  }
  render() {
    return (
      <>
        <Header />
        <div className='mt-5'>
          <form className='w-25 offset-4 border p-5'>
            <h3 className='App mb-4'> Register Form</h3>
            <input type="text" className='form-control mb-4 text-center' onChange={(e)=>{this.handleRegister(e)}} name="userName" placeholder='Enter UserName' />
            <input type="email" className='form-control text-center' onChange={(e)=>{this.handleRegister(e)}} name="email" placeholder='Enter Email' />
            <div className='border p-2 mt-4 mb-4 rounded text-center'>
              <label htmlFor='profilePic' className='text-secondary'>Profile Picture</label>
              <input type="file" id='profilePic' className='form-control' hidden onChange={(e)=>{this.handleRegister(e)}} name="profilePic" placeholder='Select Profile' />
            </div>
            <input type="password" className='form-control text-center mb-4' onChange={(e)=>{this.handleRegister(e)}} name="password" placeholder='Enter Password' />
            <input type="password" className='form-control text-center mb-4' onChange={(e)=>{this.handleRegister(e)}} name="confirmPassword" placeholder='Enter Confirm Password' />
            <div className='App mt-4'>
              <button type="submit" className='btn btn-success' onClick={(e)=>{this.RegisterForm(e)}}>User Login</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.registerReducer.regData)
  return {
    state:state.registerReducer.regData
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    registerMiddle:(reg_data,token)=>{
      dispatch(registerMiddle(reg_data,token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Register)