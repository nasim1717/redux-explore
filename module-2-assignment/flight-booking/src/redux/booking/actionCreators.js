import { BOOKING, DELETE } from "./actionTypes";

const booking = ({ destinationFrom, destinationTo, date, guests, ticketClass, id }) => {
  return {
    type: BOOKING,
    payload: {
      destinationFrom,
      destinationTo,
      date,
      guests,
      ticketClass,
      id,
    },
  };
};

const deleteBooking = (id) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};

export { booking, deleteBooking };
