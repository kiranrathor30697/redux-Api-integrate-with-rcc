import axios from "axios"
import { Toast } from "bootstrap"
import { ToastContainer } from "react-bootstrap"
import { loginActionCreator } from "../actionCreators/actionCreator"

 const loginMiddle = (loginData) => {
  return async(dispatch) => {
    try {
        let reslt = await axios.post('http://192.168.1.11:8000/api/user/login',loginData)
        // console.log(reslt.data.data);
        if(reslt.status == 200){
          localStorage.setItem('token',JSON.stringify(reslt.data.data.token))
          localStorage.setItem('userData',JSON.stringify(reslt.data.data))
        }
         dispatch(loginActionCreator(reslt))
    } catch (error) {
        console.log(error)
    }
  } 
}
export default loginMiddle