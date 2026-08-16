import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
    const isAdmin = sessionStorage.getItem("isAdmin");

    // If authenticated, render child routes. Otherwise, redirect to login page.
    return isAdmin === "true" ? <Outlet /> : <Navigate to="/adminlogin" replace />;
};

export default AdminProtectedRoute;
