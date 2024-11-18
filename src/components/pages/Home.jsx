
import Hero from '../PageComponents/home/Hero';
import Success from '../PageComponents/home/Success';

function Home() {
  

  return (
   
      <div className="container mx-auto items-center flex flex-col gap-2 mb-8">
        <Hero />
        <Success />
      </div>
    
  );
}

export default Home;
