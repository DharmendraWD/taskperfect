import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqBg from '../../../assets/img/faqBG.png';

import { faqContent } from '../../../redux/slices/homeContent/FaqSlice';
import { useDispatch, useSelector } from 'react-redux';



const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((prevOpen) => (prevOpen === id ? null : id));
  };

  const faqVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };
// ------------
const dispatch = useDispatch();
const faqData = useSelector((state) => state.faq.faqContent.data);

useEffect(() => {
dispatch(faqContent());
}, [dispatch])


  return (
    <div className="faq-section py-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-1">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm text-gray-400 sm:text-base leading-relaxed mb-8 text-center">
      A collection of the most commonly asked questions along with their answers.
        </p>
        <div className="space-y-4 relative">
       <img src={faqBg} alt="" className='absolute z-[-1] top-0 left-0 w-full h-full'/>
         {faqData?.items?.map((faq) => (
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
