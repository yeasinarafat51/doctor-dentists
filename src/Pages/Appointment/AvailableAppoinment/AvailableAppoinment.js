import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Appoinmentoptin from './Appoinmentoptin';
import Bookingmodal from '../Bookingmodal/Bookingmodal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/loading/Loading';

const AvailableAppoinment = ({selectedDate}) => {
    // const [appoinmentoption, setAppoinmentoptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const {data:appoinmentoption = [], refetch,isLoading} = useQuery({
        queryKey: ['appoinmentsoption',date],
        queryFn: () =>  fetch(`http://localhost:8000/appoinmentsoption?date=${date}`)
        .then(res =>res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch('http://localhost:8000/appoinmentsoption')
    //     .then(res =>res.json())
    //     .then(data=>setAppoinmentoptions(data))
    // },[])
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
                <Bookingmodal treatment={treatment}  setTreatment={ setTreatment} selectedDate={selectedDate} refetch={refetch}
                ></Bookingmodal>
            }
        </div>
        
    );
};

export default AvailableAppoinment;