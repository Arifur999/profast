import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer: "Yes, it's designed to be adjustable and comfortable for all body types and most age groups.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer: "Many users report significant improvement in posture and reduction in back pain with regular use.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer: "Yes, some models come with vibration alerts to remind you to correct your posture.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer: "You will be notified via email once the product is back in stock if you've subscribed for updates.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Question (FAQ)</h2>
        <p className="text-gray-600 mt-2">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="mt-8 space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className={`rounded-lg ${openIndex === index ? "bg-cyan-100" : "bg-white"} shadow`}>
            <button
              className="flex justify-between items-center w-full text-left px-6 py-4 font-semibold text-gray-800"
              onClick={() => toggle(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 flex items-center justify-center mx-auto">
          See More FAQ’s
          <span className="ml-2 rotate-45">&#10148;</span>
        </button>
      </div>
    </div>
  );
}
