import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Appoinmentoptin from './Appoinmentoptin';
import Bookingmodal from '../Bookingmodal/Bookingmodal';

const AvailableAppoinment = ({selectedDate}) => {
    const [appoinmentoption, setAppoinmentoptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data=>setAppoinmentoptions(data))
    },[])
    return (
        <div className='my-16'>
            <p className='text-center text-primary font-bold'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    appoinmentoption.map(option=><Appoinmentoptin key={option._id}
                        setTreatment={setTreatment} option={option}></Appoinmentoptin>)
                }

            </div>
            {
                treatment &&
                <Bookingmodal treatment={treatment} selectedDate={selectedDate}></Bookingmodal>
            }
        </div>
        
    );
};

export default AvailableAppoinment;