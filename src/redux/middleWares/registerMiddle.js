import axios from "axios"
import { registerActionCreator } from "../actionCreators/actionCreator"

export default function registerMiddle(data,token) {
    console.log(data,token)
  return async(dispatch) => {
      try {
          let reg = await axios.post('http://192.168.1.11:8000/api/user/register',data,{
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
