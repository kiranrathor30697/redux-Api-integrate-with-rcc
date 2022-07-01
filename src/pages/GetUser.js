import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserMiddle from '../redux/middleWares/getUserMiddle';
import {updateImgMiddle} from '../redux/middleWares/updateImgMiddle';
import Header from './layouts/Header'
import {WithRouter} from './layouts/withRouter/WithRouter'

 class GetUser extends Component {
    constructor(props){
        super(props)
        this.state={
            getUserData:{}
        }
    }
    componentDidMount(){
        this.getUser()
    }

    getUser = () => {
        let token = JSON.parse(localStorage.getItem('token'))
       this.props.getUserMiddle(token);
    //    console.log(this.props)

    }

    changeImg = (idx) => {
        this.props.navigate('/changeimg');

        // let token = JSON.parse(localStorage.getItem('token'))
        // let changeData = this.props.mydata.getUserReducer.get_user.data[idx]
        // console.log(changeData)
        // this.props.updateImgMiddle(changeData,token)
    }

  render() {
    let data =  this.props.mydata.getUserReducer.get_user.data
    // console.log(data)
    let userData = JSON.parse(localStorage.getItem('userData'))
    // console.log(userData.email)
    // console.log(this.props.mydata.getUserReducer.get_user)
    return (
        <>
            <Header />
            <button onClick={()=>{this.getUser()}} hidden>Get User</button>
            <TableContainer>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell fontSize='2em' align="center"><h5><b>S No</b></h5></TableCell>
                    <TableCell align="center"><h5><b>User Name</b></h5></TableCell>
                    <TableCell align="center"><h5><b>Email</b></h5></TableCell>
                    <TableCell align="center"><h5><b>Profile Pic</b></h5></TableCell>
                    <TableCell align="center"><h5><b>Profile Update</b></h5></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data?.length > 0 &&
                        data.map((cv,idx,arr) => (
                        <TableRow key={idx}>
                            <TableCell align="center"><h5>{idx+1}</h5></TableCell>
                            <TableCell align="center"><h5>{cv.userName}</h5></TableCell>
                            <TableCell align="center"><h5>{cv.email}</h5></TableCell>
                            <TableCell align="center"><h5>{
                            <img 
                            src={cv.profilePic}
                            alt="Image not Found"
                            height={400}
                            width={400}
                            />
                            }</h5></TableCell>
                            <TableCell align="center">
                                <h5>
                                    {
                                        (userData.userName == cv.userName)&&
                                        <button className='btn btn-info' onClick={()=>{this.changeImg(idx)}}>Update Profile</button>                                        // null
                                    }
                                </h5>
                            </TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
           
        </>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state.getUserReducer.get_user.data)
    // console.log(state)
    return {
        mydata:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUserMiddle:(getUserData)=>{
            dispatch(getUserMiddle(getUserData))
        },
        updateImgMiddle:(updt_data)=>{
            dispatch(updateImgMiddle(updt_data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (WithRouter(GetUser))