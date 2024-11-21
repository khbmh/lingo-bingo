import { useContext } from 'react';
import { AllContext } from '../../context/AllContext';
import { Link } from 'react-router-dom';

function LessonCard() {
  const { data } = useContext(AllContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-around xl:gap-12 p-4 lg:px-12">
      {data.map((lesson) => (
        <Link
          to={`/lessons/${lesson.urlId}`}
          className="flex flex-col justify-between rounded-xl shadow p-4 border-b hover:border-none hover:shadow-xl border-[blue]"
          key={lesson.lesson_id}
        >
          <h3 className="text-xl text-center font-semibold">
            {lesson.lesson_name}
          </h3>
          <img
            className="w-[250px] h-[200px] object-contain self-center p-4 bg-white"
            src={lesson.image}
            alt=""
          />
          <div className="flex items-center justify-between w-full px-4">
            <p className="bg-blue-100 px-4 py-1 rounded-2xl text-sm font-semibold w-fit">
              {lesson.lesson_difficulty}
            </p>
            <p className="bg-blue-50 px-4 py-1 rounded-2xl text-sm font-semibold w-fit">
              {lesson.words.length} words
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LessonCard;
