import { useContext } from 'react';
import Heading from '../common/Heading';
import LessonCard from '../PageComponents/letslearn/LessonCard';
import { AllContext } from '../context/AllContext';

function StartLearning() {
  const { data } = useContext(AllContext);
  console.log(data);
  return (
    <div className="container mx-auto text-center mb-8 lg:p-4 flex flex-col gap-4">
      <Heading
        title="Start Learning"
        description="Unlock your potential with our comprehensive learning resources. Start today and achieve your goals!"
      />
      <LessonCard />
    </div>
  );
}

export default StartLearning;
