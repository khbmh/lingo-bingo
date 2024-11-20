import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

function Heading({ title, description }) {
  const [visible, setVisible] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setVisible(true)}
      onExit={() => setVisible(false)}
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center max-w-[650px] px-2 my-5 transition-transform duration-500 ease-in-out">
        <h1
          className={`text-4xl font-bold ${
            visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          } transition-transform duration-500 ease-in-out`}
        >
          {title}
        </h1>
        <p
          className={`${
            visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          } transition-transform duration-700 ease-in-out`}
        >
          {description}
        </p>
      </div>
    </ScrollTrigger>
  );
}

export default Heading;
