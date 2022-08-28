import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(UserContext);
  return <>{userData ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;
