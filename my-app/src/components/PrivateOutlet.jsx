import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/Auth'


const PrivateOutlet = () => {
    const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet
