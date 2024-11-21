import Heading from '../common/Heading';

function Tutorials() {
  const tutorials = [
    'https://www.youtube.com/embed/X1mC1XY65Kc?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/XC62pWvw4b0?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/oidicz5Trvc?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/G8ZGHfCCjgc?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/Zxmhzg1NkHo?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/vZcnyKYWqIQ?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/TO3HDwGVu4M?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/SDA6f2cCkjY?si=gaQznZKO_KHZDoJ4',
    'https://www.youtube.com/embed/tXJlD2yywq8?si=gaQznZKO_KHZDoJ4',
  ];
  return (
    <div className="container mx-auto mb-10">
      <Heading
        title="Tutorials"
        description="Master new skills with our step-by-step video tutorials. Clear, concise, and easy to follow. Start learning now!

"
      />
      <div className="items-center justify-around grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-16 xl:grid-cols-3 p-1 md:p-4">
        {tutorials.map((tut, id) => {
          return (
            <div className="w-[300px]" key={id}>
              <iframe
                width="354"
                height="200"
                src={tut}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tutorials;
