import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const PublicRoute = ({ children, restricted }) => {
  const { userData } = useContext(UserContext);
  const notAccepted = restricted && userData;
  return <>{notAccepted ? <Navigate to="/user" /> : children}</>;
};

export default PublicRoute;
