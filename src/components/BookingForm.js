import { useState } from "react";

const BookingForm = (props) => {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [guestsInput, setGuestsInput] = useState("");
  const [occasionInput, setOccasionInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm();
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
          >
            <option value="">Choose date</option>
            {props.availableTimes.map((time, index) => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guestsInput}
            onChange={(e) => setGuestsInput(e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasionInput}
            onChange={(e) => setOccasionInput(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
