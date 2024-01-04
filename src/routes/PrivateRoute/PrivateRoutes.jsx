/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { Example } from "../../components/Loading/Loading";
import { auth } from "../../firebase/firebase.config";

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Example />;
  }

  if (!user) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoutes;
