import React from "react";
import Productdetail from "../page/Productdetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate === true ? <Productdetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
