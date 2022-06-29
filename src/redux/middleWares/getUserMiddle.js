import axios from "axios"
import { getUserActionCreator } from "../actionCreators/actionCreator"

export default function getUserMiddle(token) {
    // console.log(token)
  return async(dispatch) => {
    let getUser = await axios.get('http://192.168.1.11:8000/api/user/registeredUser',{
        headers:{
            Authorization:token
        }
    })
    // console.log(getUser)
    await dispatch(getUserActionCreator(getUser))
  }
}
