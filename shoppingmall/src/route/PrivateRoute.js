import React from "react";
import Productdetail from "../page/Productdetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <Productdetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
