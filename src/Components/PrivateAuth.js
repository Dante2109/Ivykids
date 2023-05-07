import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateAuth = ({children}) => {
    const {isAuth}=useSelector(store=>store.reducer);
    if(!isAuth){
        console.log(isAuth)
        return Navigate({to:"/"})
    }
    return children
}

export default PrivateAuth;