import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CountCard({ title, num, comment }) {
  const [runSuccess, setRunSuccess] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setRunSuccess(true)}
      onExit={() => setRunSuccess(false)}
    >
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title font-bold text-black">{title}</div>
          <div className="stat-value text-[blue]">
            {runSuccess && <CountUp end={num} />}
          </div>
          <div className="stat-desc">{comment}</div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default CountCard;
