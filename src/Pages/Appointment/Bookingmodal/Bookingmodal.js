import { format } from "date-fns";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Bookingmodal = ({ treatment, setTreatment, selectedDate,refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const {user} =useContext(AuthContext);

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
        appointmentDate:date,
        treatment:treatmentName,
       patient: name,
        slot,
        email,
        phone,
    }
    console.log(booking)
    fetch('http://localhost:8000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        setTreatment(null)
        toast.success('Booking confirmed')
        refetch()
      }else{
        toast.error(data.message)
        
      }
     
      
     
    })
    

   
  }
  
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={date}
              disabled
              className="input  input-bordered  w-full "
            />
            <select name='slot' className="select select-bordered w-full ">

              {slots.map((solt, i)=><option value={solt} key={i} selected>
                {solt}
              </option>)
              }
            </select>
            <input
              type="text"
              name='name'
              defaultValue={user?.displayName} disabled
              placeholder="Your Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name='email'
              defaultValue={user?.email}
              disabled
              placeholder="Email Adress"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name='phone'
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookingmodal;
