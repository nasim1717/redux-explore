import { useDispatch, useSelector } from "react-redux";
import Frame from "../assets/img/icons/Frame.svg";
import Vctore1 from "../assets/img/icons/Vector (1).svg";
import Vctore2 from "../assets/img/icons/Vector (2).svg";
import Vctore3 from "../assets/img/icons/Vector (3).svg";
import { COUNT } from "../redux/booking/actionTypes";
import DookingDisplay from "./DookingDisplay";
import { booking } from "../redux/booking/actionCreators";

const Booking = () => {
  const bookingsData = useSelector((state) => state.booking);
  console.log("bookingData", bookingsData);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = COUNT();
    // console.log(event.target.to.value);
    const form = event.target;
    const destinationFrom = form.destinationFrom.value;
    const destinationTo = form.destinationTo.value;
    const date = form.date.value;
    const guests = form.guests.value;
    const ticketClass = form.ticketClass.value;

    console.log(destinationFrom, destinationTo, date, guests, ticketClass);
    const bookings = { destinationFrom, destinationTo, date, guests, ticketClass, id: id };
    dispatch(booking(bookings));
  };

  return (
    <>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form onSubmit={handleSubmit} className="first-hero lws-inputform">
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={Frame} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="destinationFrom"
                  id="lws-from"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Saidpur">Saidpur</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={Frame} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="destinationTo"
                  id="lws-to"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Saidpur">Saidpur</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
              />
            </div>

            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={Vctore1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src={Vctore3} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Business">Business</option>
                  <option value="Economy">Economy</option>
                </select>
              </div>
            </div>

            <button
              disabled={bookingsData.length >= 3 && true}
              className="addCity"
              type="submit"
              id="lws-addCity"
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
        {bookingsData.length > 0 && <DookingDisplay bookingsData={bookingsData}></DookingDisplay>}
      </div>
    </>
  );
};

export default Booking;
