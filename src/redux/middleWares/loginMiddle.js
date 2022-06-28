import axios from "axios"
import { Toast } from "bootstrap"
import { ToastContainer } from "react-bootstrap"
import { loginActionCreator } from "../actionCreators/actionCreator"

 const loginMiddle = (loginData) => {
  return async(dispatch) => {
    try {
        let reslt = await axios.post('http://192.168.1.11:8000/api/user/login',loginData)
        console.log(reslt);
        if(reslt.status == 200){
          localStorage.setItem('token',JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIwMGVhNTVhN2VhZTY2YmMzZjJhYWEiLCJpYXQiOjE2NTY0MjE2MzB9.wWTHazeOxL7aE8Yf1KAFXjY3KRbZRCRvwOXw8NJe2Rg'))
        }
         dispatch(loginActionCreator(reslt))
    } catch (error) {
        console.log(error)
    }
  } 
}
export default loginMiddle