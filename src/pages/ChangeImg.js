import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserMiddle from '../redux/middleWares/getUserMiddle';
import { WithRouter } from './layouts/withRouter/WithRouter';

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
     changeProfile = (e) => {
         e.preventDefault()
     }
  render() {
    let imgdata = this?.props?.state?.getUserReducer?.get_user?.data
    console.log(imgdata)
    return (
      <>
        <form className='w-25 mx-auto border p-4 mt-5'>
            <h4 className='mb-4 text-center'>Change image</h4>
            <input type="email" className='form-control mb-4' name='email' /> 
            <input type="file" className='form-control mb-4' accept='image/*' name='profilePic' /> 
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
