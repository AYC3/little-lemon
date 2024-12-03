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
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
              required
            >
              <option value="">Choose time</option>
              {props.availableTimes.map((time, index) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder=""
              min="1"
              max="10"
              id="guests"
              value={guestsInput}
              onChange={(e) => setGuestsInput(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasionInput}
              onChange={(e) => setOccasionInput(e.target.value)}
              required
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div>
            <input
              className="submit-input"
              type="submit"
              value="Make Your reservation"
              aria-label="On Click"
            />
          </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
