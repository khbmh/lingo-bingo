import CountCard from '../../common/CountCard';
import Heading from '../../common/Heading';

function Success() {
  return (
    <>
      <Heading
        title="Platform Statistics"
        description="See key metrics highlighting our growth, including total users, lessons, words, and tutorials constantly updated to enhance your learning journey"
      />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-12 mb-10">
        <CountCard
          title="Total Users"
          num={2400}
          comment="11% more than last month"
        />
        <CountCard title="Total Lessons" num={20} comment="More to be added" />
        <CountCard
          title="Total Words"
          num={400}
          comment="Added on regular basis."
        />
        <CountCard title="Total Tutorials" num={30} comment="More to come." />
      </div>
    </>
  );
}

export default Success;
