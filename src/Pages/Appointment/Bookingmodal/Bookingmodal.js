import { format } from "date-fns";
import React from "react";

const Bookingmodal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={date}
              disabled
              className="input  input-bordered  w-full "
            />
            <select className="select select-bordered w-full ">

              {slots.map(solt=><option value={solt}  selected>
                {solt}
              </option>)
              }
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
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
