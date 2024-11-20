import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const AboutCard = ({ title, description }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setVisible(true)}
      onExit={() => setVisible(false)}
    >
      <div
        className={`${
          visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        } flex flex-col gap-2 p-4 lg:p-8 rounded-xl bg-blue-100 transition-transform duration-500 ease-in-out`}
      >
        <h1 className="text-2xl p-2 text-blue-500 font-semibold border bg-white rounded-xl w-fit">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </ScrollTrigger>
  );
};

export default AboutCard;
