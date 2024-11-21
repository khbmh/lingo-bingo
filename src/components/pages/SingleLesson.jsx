import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllContext } from '../context/AllContext';
import Heading from '../common/Heading';
import { RxSpeakerLoud } from 'react-icons/rx';
// import LessonCard from "../PageComponents/letslearn/LessonCard";

function SingleLesson() {
  const { data, pronounceWord } = useContext(AllContext);
  const { url } = useParams();
  const lesson = data.find((info) => info.urlId == url);

  const handleOpenModal = (id) => {
    const modal = document.getElementById(`my_modal_${id}`);
    modal.showModal();
  };

  const handleCloseModal = (id) => {
    const modal = document.getElementById(`my_modal_${id}`);
    modal.close();
  };
  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Heading title={lesson.lesson_name} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-14 gap-5 gap-y-7 justify-around xl:gap-12 p-4 lg:px-12">
        {lesson.words.map((word) => {
          return (
            <div
              key={word.Id}
              className="hover:shadow-lg border flex flex-col justify-between gap-3 select-none p-4 rounded-xl items-center"
            >
              <h3 className="text-lg font-semibold">{word.meaning}</h3>
              <div className="text-center">
                <h2 className="text-3xl text-[blue] font-arabic">
                  {word.word}
                </h2>
                <h2 className="text-sm font-arabic">({word.pronunciation})</h2>
              </div>
              <div className="flex w-full items-center justify-between px-6 py-2 mt-4">
                <p
                  className="text-xl cursor-pointer
                "
                  onClick={() => {
                    pronounceWord(word.word);
                  }}
                >
                  <RxSpeakerLoud />
                </p>
                <p
                  className="border rounded-full text-sm px-3 py-1 cursor-pointer"
                  onClick={() => handleOpenModal(word.Id)}
                >
                  View Details
                </p>

                <dialog
                  id={`my_modal_${word.Id}`}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box" method="modal-action">
                    <form
                      method="dialog"
                      className="flex flex-col items-center justify-between py-2 min-h-[50vh]"
                    >
                      <div className="min-h-[42vh] flex flex-col items-center justify-between p-2 space-y-3">
                        <h3 className="text-lg font-semibold">
                          {word.meaning}
                        </h3>
                        <div className="text-center">
                          <h2 className="text-3xl text-[blue] font-arabic">
                            {word.word}
                          </h2>
                          <h2 className="text-sm font-arabic">
                            ({word.pronunciation})
                          </h2>
                        </div>
                        <p
                          className="text-2xl cursor-pointer my-2"
                          onClick={() => {
                            pronounceWord(word.word);
                          }}
                        >
                          <RxSpeakerLoud />
                        </p>

                        <div className="flex w-full items-center justify-around gap-4">
                          <p className="text-xs bg-blue-100 rounded-xl py-1 px-3">
                            Difficulty - {word.difficulty}
                          </p>
                          <p className="text-xs bg-blue-50 rounded-xl py-1 px-3">
                            {word.part_of_speech} word
                          </p>
                        </div>
                        <div className="my-2 text-center">
                          <p>Example:</p>
                          <p className="font-arabic">{word.example}</p>
                        </div>
                        <p className="text-sm bg-blue-50 rounded-full py-1 px-3 text-center">
                          {word.when_to_say}
                        </p>
                      </div>

                      <button
                        className="border rounded-full text-sm px-3 py-1 cursor-pointer"
                        type="button"
                        onClick={() => handleCloseModal(word.Id)}
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleLesson;
