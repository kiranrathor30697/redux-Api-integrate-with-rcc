import axios from "axios"
import { updateImgActionCreator } from "../actionCreators/actionCreator";

export const updateImgMiddle = (data,token) =>{
    console.log(token)
    console.log(data)
    let formData = new FormData();
    formData.append('email',data.email)
    formData.append('profilePic',data.profilePic)
    formData.append('userName',data.userName)
    // console.log(formData)

    return async(dispatch) => {
        try {
            let update_img = await axios.patch('http://192.168.1.11:8000/api/user/update',formData,{
            headers:{
                Authorization:token
            }
        });
        console.log(update_img)
            localStorage.setItem('userData',JSON.stringify(update_img.data))
        
            await dispatch(updateImgActionCreator(update_img))
        } catch (error) {
            console.log(error)
        }
    }
}