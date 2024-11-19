import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

function Heading({ title, description }) {
  const [visible, setVisible] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setVisible(true)}
      onExit={() => setVisible(false)}
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center max-w-[650px] px-2 my-5">
        <h1
          className={`text-4xl font-bold ${
            visible ? 'opacity-1' : 'opacity-0'
          } `}
        >
          {title}
        </h1>
        <p className={`${visible ? 'opacity-1' : 'opacity-0'} `}>
          {description}
        </p>
      </div>
    </ScrollTrigger>
  );
}

export default Heading;
