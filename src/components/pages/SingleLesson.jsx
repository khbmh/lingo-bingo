import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AllContext } from '../context/AllContext';
import Heading from '../common/Heading';
// import LessonCard from "../PageComponents/letslearn/LessonCard";

function SingleLesson() {
  /*
Lesson_no
difficulty
example
meaning
part_of_speech
pronunciation
when_to_say
word
*/

  const { data, pronounceWord } = useContext(AllContext);
  const { url } = useParams();
  const lesson = data.find((info) => info.urlId == url);
  return (
    <div>
      <Heading title={lesson.lesson_name} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-7 justify-around xl:gap-12 p-4 lg:px-12">
        {lesson.words.map((word) => {
          return (
            <div
              key={word.Id}
              className="shadow flex flex-col justify-between gap-3 select-none cursor-pointer p-4 rounded-xl items-center"
              onClick={() => {
                pronounceWord(word.word);
              }}
            >
              <h3 className="text-lg font-semibold">{word.meaning}</h3>
              <div className="text-center">
                <h2 className="text-3xl font-arabic">{word.word}</h2>
                <h2 className="text-sm font-arabic">({word.pronunciation})</h2>
              </div>
              {/* <h2>{word.word}</h2> */}
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleLesson;
