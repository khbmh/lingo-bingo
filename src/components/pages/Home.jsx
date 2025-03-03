import AboutUs from '../PageComponents/home/AboutUs';
import FAQ from '../PageComponents/home/FAQ';
import Feedback from '../PageComponents/home/Feedback';
import Hero from '../PageComponents/home/Hero';
import Success from '../PageComponents/home/Success';

function Home() {
  return (
    <div className="container mx-auto items-center flex flex-col gap-6 mb-8">
      <Hero />
      <AboutUs />
      <Success />
      <Feedback />
      <FAQ />
    </div>
  );
}

export default Home;
