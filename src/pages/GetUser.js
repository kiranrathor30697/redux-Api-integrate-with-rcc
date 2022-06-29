import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserMiddle from '../redux/middleWares/getUserMiddle';
import Header from './layouts/Header'

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

    }

  render() {
    let data =  this.props.mydata.data

    return (
        <>
            <Header />
            <button onClick={()=>{this.getUser()}} hidden>Get User</button>
            {console.log(data)}
            <TableContainer>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell fontSize='2em' align="center"><h5><b>S No</b></h5></TableCell>
                    <TableCell align="center"><h5><b>User Name</b></h5></TableCell>
                    <TableCell align="center"><h5><b>Email</b></h5></TableCell>
                    <TableCell align="center"><h5><b>Profile Pic</b></h5></TableCell>
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
                            <TableCell align="center"><h5>{cv.profilePic}</h5></TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
            {
                data?.length > 0 &&
                data.map((cv)=>{
                    
                })
            }
        </>
    );
  }
}
const mapStateToProps = (state) => {
    // console.log(state.getUserReducer.get_user)
    return {
        mydata:state.getUserReducer.get_user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUserMiddle:(getUserData)=>{
            dispatch(getUserMiddle(getUserData))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (GetUser)