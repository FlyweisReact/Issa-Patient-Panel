import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated } from './Store/authSlice';
import { Navigate, Outlet } from 'react-router-dom';

function Protected_Route({ children }) {
    const isLoggedIn = useSelector(isAuthenticated);
    console.log(isLoggedIn,"isLoggedIn");
  
    return (
        <>
            {isLoggedIn ? <Outlet/> : <Navigate to="/" />}
        </>
    );
}

export default Protected_Route;
