import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <h3>존재하지 않는 경로</h3>
      <p>요청 경로 : {location.pathname}</p>
    </div>
  )
};
export default NotFound;
