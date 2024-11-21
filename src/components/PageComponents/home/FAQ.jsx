import Heading from '../../common/Heading';

function FAQ() {
  const qna = [
    {
      question: 'How do I sign up for Lingo Bingo?',
      answer:
        "Click on the 'Sign Up' button on the homepage, fill in your details, and follow the prompts to create your account.",
    },
    {
      question: 'Can I learn multiple languages on Lingo Bingo?',
      answer:
        'Unfortunately not, Lingo Bingo supports 1 language. You can learn only arabic for now.',
    },
    {
      question: 'Is Lingo Bingo suitable for beginners?',
      answer:
        'Absolutely! Lingo Bingo offers lessons for all skill levels, including beginners, intermediate learners, and advanced users.',
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <Heading
        title="Frequently Asked Questions"
        description="Find answers to common questions about Lingo Bingo's features, usage, and benefits in our FAQ section"
      />
      <div className="flex flex-col gap-3">
        {qna.map((item, index) => (
          <div key={index} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
