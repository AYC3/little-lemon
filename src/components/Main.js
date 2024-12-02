import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api.js";

const Main = () => {
  // const initializeTimes = () => {
  //   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  // };

  // // API Wasnt working so i'm using int just here:
  // const seededRandom = function (seed) {
  //   var m = 2 ** 35 - 31;
  //   var a = 185852;
  //   var s = seed % m;
  //   return function () {
  //     return (s = (s * a) % m) / m;
  //   };
  // };

  // const fetchAPI = function (date) {
  //   let result = [];
  //   let random = seededRandom(date.getDate());

  //   for (let i = 17; i <= 23; i++) {
  //     if (random() < 0.5) {
  //       result.push(i + ":00");
  //     }
  //     if (random() < 0.5) {
  //       result.push(i + ":30");
  //     }
  //   }
  //   return result;
  // };
  // const submitAPI = function (formData) {
  //   return true;
  // };
  // // API end.

  const initializeTimes = fetchAPI(new Date());

  const updateTimes = (state, date) => {
    return fetchAPI(new Date(date));
  };
  console.log(updateTimes());

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("ConfirmedBooking");
    }
  };

  return (
    // <Routes>
    //    <Route path="/" element={<HomePage />}></Route>
    //   <Route path="/booking" element={<BookingPage />}></Route>
    // </Routes>

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
