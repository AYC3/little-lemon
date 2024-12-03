import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api.js";

const Main = () => {
  const initializeTimes = fetchAPI(new Date());

  const updateTimes = (state, date) => {
    return fetchAPI(new Date(date));
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("ConfirmedBooking");
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="BookingForm"
          element={
            <BookingForm availableTimes={state} submitForm={submitForm} />
          }
        />
        <Route path="ConfirmedBooking" element={<ConfirmedBooking />} />
      </Routes>

      {/* <BookingForm availableTimes={state} /> */}
      {/* <ConfirmedBooking /> */}
    </div>
  );
};

export default Main;
