import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserMiddle from '../redux/middleWares/getUserMiddle';
import { WithRouter } from './layouts/withRouter/WithRouter';
import changeImg from './changeImg.css'
import { updateImgMiddle } from '../redux/middleWares/updateImgMiddle';

 class ChangeImg extends Component {
     constructor(){
         super()
         this.state = {
             myimgdata:{
                email:'',
                profilePic:''
             }
         }
     }
     changeUserEmail = (e) => {
        //  console.log('chenged');
        console.log(e.target.value)
        this.setState({
            myimgdata:{
                ...this.state.myimgdata,
                email:e.target.value
            }
        })
     }
     changeUserImg = (e) => {
        console.log(e.target.value)
     }
     changeProfile = (e) => {
         e.preventDefault();
         let token = JSON.parse(localStorage.getItem('token'))
         this.props.dispatch(updateImgMiddle(this.state.myimgdata,token))
     }
  render() {
    let userData = JSON.parse(localStorage.getItem('userData'))
    console.log(userData.profilePic)
    return (
      <>
        <form className='w-50 mx-auto border p-4 mt-5'>
            <h4 className='mb-4 text-center'>Change image</h4>
            <input type="email" className='form-control mb-4' value={userData.email} onChange={(e)=>{this.changeUserEmail(e)}} name='email' /> 
            <div className='image text-center' >
                <img src={userData.profilePic} />
            </div>
            <label htmlFor='img' className='updt_img'>
                <input type="file" id='img' className='form-control mb-4' onChange={(e)=>{this.changeUserImg(e)}} hidden  accept='image/*' name='profilePic' />            
            </label>
            <div className='text-center'>
                <button type='submit' className='btn btn-success' onClick={(e)=>{this.changeProfile(e)}}>Change Image</button>
            </div>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        state:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUserMiddle:(getUserData)=>{
            dispatch(getUserMiddle(getUserData))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (WithRouter(ChangeImg))
