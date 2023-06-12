import React from "react";
import { BOOKING, DELETE } from "./actionTypes";

const initialState = {
  booking: [],
};

const bookingReducer = (state = initialState, action) => {
  //   console.log("ok");
  //   state.booking.push({ a: "a" });
  //   check.push({ a: "a" });

  console.log("action", state);
  //   const newStae = { ...state };
  //   newStae.booking = [...state.booking];
  //   newStae.booking.push(action.payload);
  switch (action.type) {
    case BOOKING:
      return {
        ...state,
        booking: [...state.booking, action.payload],
      };
    case DELETE:
      let newBooking = state.booking;
      newBooking = newBooking.filter((data) => data.id != action.payload.id);
      return {
        ...state,
        booking: [...newBooking],
      };
    default:
      return state;
  }
};

export default bookingReducer;
