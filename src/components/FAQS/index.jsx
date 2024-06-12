import React, { useState } from "react";
import FAQSWrapper from "../../assets/faqswrapper.png";
import "./faqs.css";
import { FaChevronRight } from "react-icons/fa6";


export const Faqs = () => {
  const faqData = [
    {
      question: "How do I pay for the essentials or premium plan?",
      answer: "You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      question: "We need to add new users to our team. How will that be billed?",
      answer: "You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      question: "Do you offer discounts for non-profit organizations or educational institutions?",
      answer: "You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      question: "Can I cancel my essentials or premium plan subscription at any time?",
      answer: "You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      question: "My team wants to cancel its subscription. How do we do that? Can we get a refund?",
      answer: "You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faqs">
      <div className="container">
      <img className="FAQSWrapper" src={FAQSWrapper} alt="" />
        <h4 className="text-danger">FAQ'S</h4>
        <h2>COMMONLY ASKED QUESTIONS</h2>
        <div className="questions">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="quest" onClick={() => toggleAnswer(index)}>
                <p className="text-danger">{faq.question}</p>
                <span className="text-danger"><FaChevronRight /></span>
              </div>
              {openIndex === index && <div className="answers"><p>{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
