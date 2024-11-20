import Heading from '../../common/Heading';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
function Feedback() {
  const feedbacks = [
    {
      Image:
        'https://i.pinimg.com/736x/74/f6/bd/74f6bd2ffbe050ed0fad594a21f6f3ac.jpg',
      name: 'Alex Sanchez',
      profession: 'Marketing Manager',
      feedback:
        'Lingo Bingo has been a game-changer for my Spanish learning journey. The interactive vocabulary cards and tutorials make learning fun and effective. Highly recommended!',
    },
    {
      Image:
        'https://i.pinimg.com/736x/aa/f4/45/aaf44580d5c933fc862f8afc51b30e33.jpg',
      name: 'John Peterson',
      profession: 'Software Engineer',
      feedback:
        'As a tech enthusiast, I appreciate the user-friendly interface of Lingo Bingo. The progress tracking feature keeps me motivated, and the community support is fantastic. Great job!',
    },
    {
      Image:
        'https://i.pinimg.com/736x/81/ac/9e/81ac9ef6456e8eccbf651fc368e83e4a.jpg',
      name: 'Arman Khan',
      profession: 'Student',
      feedback:
        "Lingo Bingo has made learning Arabic so much easier and enjoyable. The lessons are well-structured, and the pronunciation guides are incredibly helpful. I'm making progress faster than I ever thought possible!",
    },
    {
      Image:
        'https://i.pinimg.com/736x/59/96/a5/5996a5971c681c80b5ddd3416c767a82.jpg',
      name: 'David Lee',
      profession: 'Travel Blogger',
      feedback:
        'Traveling to new countries has always been my passion, and Lingo Bingo has helped me learn essential phrases in multiple languages. The platform is intuitive and the resources are top-notch. Thank you, Lingo Bingo!',
    },
    {
      Image:
        'https://i.pinimg.com/736x/71/c3/77/71c3773910f00f061c86184555afda89.jpg',
      name: 'Adward Clark',
      profession: 'Teacher',
      feedback:
        'I use Lingo Bingo to supplement my language teaching in the classroom. The interactive lessons and multimedia content engage my students and make learning more dynamic. A fantastic resource for educators!',
    },
  ];
  return (
    <div className="container mx-auto flex items-center flex-col">
      <Heading
        title="Users Review"
        description="Hear from our users: Discover how Lingo Bingo transforms language learning with interactive tools and supportive community"
      />
      <div className="carousel space-x-3 rounded-box w-[90%] mx-auto">
        {feedbacks.map((feedback) => {
          return (
            <div
              className="carousel-item w-full lg:w-[40%] mx-auto f shadow border m-4 rounded-xl bg-blue-100"
              key={feedback.name}
            >
              <div className="p-6 select-none space-y-3">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover border border-[3px] border-white"
                  src={feedback.Image}
                  alt={feedback.name}
                />
                <div>
                  <h2 className="text-lg font-bold">{feedback.name}</h2>
                  <p className="text-sm">{feedback.profession}</p>
                </div>
                <p className="text-gray-600">{feedback.feedback}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-xs flex items-center justify-center gap-4 text-black/20">
        <FaArrowLeft /> <span className="font-bold">Scroll</span>{' '}
        <FaArrowRight />
      </p>
    </div>
  );
}

export default Feedback;
