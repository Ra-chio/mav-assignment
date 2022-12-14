import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    let user = localStorage.getItem("login");
    return user;
};

const ProtectedRoute = () => {
    const isAuth = useAuth();

    return isAuth === "true" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
