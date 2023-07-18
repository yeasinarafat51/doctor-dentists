import { format } from "date-fns";
import React from "react";

const Bookingmodal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
        appointmentDate:date,
        treatment:name,
       patient: name,
        slot,
        email,
        phone,
    }
    console.log(booking)
    setTreatment(null)

   
  }
  
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
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
              placeholder="Your Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name='email'
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
