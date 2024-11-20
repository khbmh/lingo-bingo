import { Link } from 'react-router-dom';
import AboutCard from '../../common/AboutCard';
import Heading from '../../common/Heading';

function AboutUs() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center container mx-auto">
      <div>
        <Heading
          title="About Lingo Bingo"
          description="Learn how Lingo Bingo's innovative platform empowers language learners with interactive tools and a supportive community for effective vocabulary acquisition."
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center lg:justify-around mb-8 p-4">
        <AboutCard
          title="Our Mission"
          description="At Lingo Bingo, our mission is to empower language learners by providing them with interactive and engaging tools that facilitate the acquisition of robust vocabularies. We are committed to making language learning accessible, enjoyable, and effective for everyone, regardless of their skill level or background."
        />
        <AboutCard
          title="Our Vision"
          description="Our vision is to become the leading global platform for language learning, renowned for its innovative, user-friendly approach and comprehensive resources. We aspire to create a vibrant community where learners can connect, practice, and thrive, ultimately helping them achieve fluency and cultural understanding in their chosen languages."
        />
      </div>
      <Link to="/about-us" className="btn btn-primary">
        Learn More
      </Link>
    </div>
  );
}

export default AboutUs;
