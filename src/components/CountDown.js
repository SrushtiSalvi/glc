import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const [isTimerOver, setIsTimerOver] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    const target = new Date('02/02/2022 01:46:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const x = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const h = x + 24 * d;
      if (h < 10) {
        setHours('0' + h);
      } else {
        setHours(h);
      }

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      if (m < 10) {
        setMinutes('0' + m);
      } else {
        setMinutes(m);
      }

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      if (s < 10) {
        setSeconds('0' + s);
      } else {
        setSeconds(s);
      }

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setIsTimerOver(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {isTimerOver ? (
        <p className="text-red-500">Closed</p>
      ) : (
        <section>
          <p className="text-xs text-right">Time Remaining</p>
          <p
            className={
              hours >= 12
                ? 'text-3xl font-semibold text-green-500'
                : hours >= 6
                ? 'text-3xl font-semibold text-yellow-400'
                : 'text-3xl font-semibold text-red-500'
            }>
            {hours}:{minutes}:{seconds}
          </p>
        </section>
      )}
    </div>
  );
};

export default CountDown;
