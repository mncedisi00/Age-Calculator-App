import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    const diff = today - birthDate;
    const ageDate = new Date(diff);
    const ageYears = ageDate.getUTCFullYear() - 1970;
    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() - 1;
    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculatedAge = calculateAge(day, month, year);
    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Day:
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
        <label>
          Month:
          <input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <button type="submit">Calculate Age</button>
      </form>
      {age && (
        <div>
          <h2>{age.years} years</h2>
          <h2>{age.months} months</h2>
          <h2>{age.days} days</h2>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;