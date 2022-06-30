import axios from "axios"
import { updateImgActionCreator } from "../actionCreators/actionCreator";

export const updateImgMiddle = (data,token) =>{
    let formData = new FormData();
    formData.append('email',data.email)
    formData.append('profilePic',data.profilePic)
    return async(dispatch) => {
        let update_img = await axios.patch('http://192.168.1.11:8000/api/user/update',data,{
            headers:{
                Authorization:token
            }
        });
        await dispatch(updateImgActionCreator(update_img))
    }
}