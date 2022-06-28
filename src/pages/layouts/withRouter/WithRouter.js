import { useNavigate, useParams } from 'react-router-dom';

export const WithRouter = (Component) => {
  const MyRouter = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    
    return (
      <Component navigate={navigate} params={params} {...props} />
    );
  };
  
  return MyRouter;
};