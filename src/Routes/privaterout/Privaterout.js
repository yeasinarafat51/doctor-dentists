import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privaterout = ({children}) => {
    const {user,  loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <div
        className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
    }


    if ( user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Privaterout;