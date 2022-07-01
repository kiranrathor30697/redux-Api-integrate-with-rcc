import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserMiddle from '../redux/middleWares/getUserMiddle';
import { WithRouter } from './layouts/withRouter/WithRouter';
import changeImg from './changeImg.css'
import { updateImgMiddle } from '../redux/middleWares/updateImgMiddle';
import Header from './layouts/Header';

 class ChangeImg extends Component {
     constructor(){
         super()
         this.state = {
            myimgdata:{
                email:'',
                profilePic:'',
                userName:''
            }
         }
     }

     componentDidMount(){
        let userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData.userName)
        this.setState({
             myimgdata:{
                 ...this.state.myimgdata,
                 email:userData.email,
                 profilePic:userData.profilePic,
                 userName:userData.userName
             }
        })
     }
     changeUserEmail = (e) => {
        console.log(e.target.value)
        this.setState({
            myimgdata:{
                ...this.state.myimgdata,
                email:e.target.value,
            }
        })
     }
     changeUserImg = (e) => {
        //  console.log(e.target.files[0]);
        let profilePic = e.target.files[0]
        this.state.myimgdata.profilePic = profilePic
     }
     
     changeProfile = (e) => {
         e.preventDefault();
         let token = JSON.parse(localStorage.getItem('token'))
        //  console.log(token)
         console.log(this.state.myimgdata)
         this.props.updateImgMiddle(this.state.myimgdata,token)
     }
  render() {
    let userData = JSON.parse(localStorage.getItem('userData'))
    let updateImg = JSON.parse(localStorage.getItem('update_data'))
    console.log(updateImg)
    {console.log(this.state)}
    return (
      <>
      <Header />
        <form className='w-50 mx-auto border p-4 mt-5'>
            <h4 className='mb-4 text-center'>Change image</h4>
            <input type="email" className='form-control mb-4' value={this.state.myimgdata.email} onChange={(e)=>{this.changeUserEmail(e)}} name='email' /> 
            <div className='image text-center' >
                <img src={userData.profilePic}  className='image'/>
                
            </div>
            <label htmlFor='img' className='updt_img'>
                <input type="file" id='img' hidden className='form-control mb-4' onChange={(e)=>{this.changeUserImg(e)}}  accept='image/*' name='profilePic' />            
            </label>
            <div className='text-center mt-5 '>
                <button type='submit' className='btn btn-success mybtn' onClick={(e)=>{this.changeProfile(e)}}>Change Image</button>
            </div>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        state:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUserMiddle:(getUserData)=>{
            dispatch(getUserMiddle(getUserData))
        },
        updateImgMiddle:(updateUser,token)=>{
            dispatch(updateImgMiddle(updateUser,token))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (WithRouter(ChangeImg))
