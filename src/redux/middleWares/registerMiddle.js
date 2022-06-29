import axios from "axios"
import { registerActionCreator } from "../actionCreators/actionCreator"

export default function registerMiddle(data,token) {
    console.log(data,token)
    
    let formData = new FormData();
    formData.append("userName",data.userName)
    formData.append("email",data.email)
    formData.append("profilePic",data.profilePic)
    formData.append("password",data.password)
    formData.append("confirmPassword",data.confirmPassword)
  return async(dispatch) => {
      try {
          let reg = await axios.post('http://192.168.1.11:8000/api/user/register',formData,{
              headers:{
                  Autorization:token
              }
          })
          await dispatch(registerActionCreator(reg))
      } catch (error) {
          console.log(error)
      }
  }
}
