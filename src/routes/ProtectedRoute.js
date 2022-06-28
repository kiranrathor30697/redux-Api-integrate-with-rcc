import { Navigate, Outlet } from "react-router-dom";


const getToken = () => {
    // let token = localStorage.getItem('token') 
    let token = localStorage.getItem('token') 
    
    return (!token)?true:null    
}
  const ProtectedRoute = (props) => {
      const mytoken = getToken()
  return mytoken?<Outlet />:<Navigate to="/login" />
}
export default ProtectedRoute;