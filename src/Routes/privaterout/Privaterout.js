import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Privaterout = ({children}) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default Privaterout;