import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqBg from '../../../assets/img/faqBG.png';


const faqs = [
  {
    id: 1,
    question: 'What is a share market?',
    answer: 'A share market is a place where buyers and sellers come together to trade shares of publicly listed companies.',
  },
  {
    id: 2,
    question: 'What is the difference between the primary and secondary market?',
    answer: 'The primary market is where new securities are issued for the first time, while the secondary market is where previously issued securities are bought and sold.',
  },
  {
    id: 3,
    question: 'What is the difference between shares and stocks?',
    answer: 'The terms "shares" and "stocks" are often used interchangeably to refer to equity ownership in a company.',
  },
  {
    id: 4,
    question: 'How can I invest in the share market?',
    answer: 'To invest in the share market, you typically need to open a trading and demat account with a registered stockbroker.',
  },
  {
    id: 5,
    question: 'What are dividends?',
    answer: 'Dividends are a portion of a company s profits distributed to its shareholders, usually on a quarterly or annual basis.',
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((prevOpen) => (prevOpen === id ? null : id));
  };

  const faqVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="faq-section py-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-1">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm text-gray-400 sm:text-base leading-relaxed mb-8 text-center">
          Precise brings you a carefully curated selection of some of the most
        </p>
        <div className="space-y-4 relative">
       <img src={faqBg} alt="" className='absolute z-[-1] top-0 left-0 w-full h-full'/>
         {faqs.map((faq) => (
  <motion.div
    layout
    key={faq.id}
    className="bg_transparent rounded-lg cursor-pointer overflow-hidden"
  >
    <div
      className="flex justify-between items-center p-4"
      onClick={() => toggleFAQ(faq.id)}
    >
      <h3 className="text-lg font-medium">{faq.question}</h3>
      <motion.span
        animate={openFAQ === faq.id ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        {openFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
      </motion.span>
    </div>
    <AnimatePresence initial={false}>
      {openFAQ === faq.id && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="p-4"
        >
          <p className="text-gray-300">{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
))}

        </div>
      </div>
    </div>
  );
};

export default FAQ;
