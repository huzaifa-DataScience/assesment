import React from 'react';
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'; 
import { motion } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {

  const navigate = useNavigate()

  const handleBack = () => {

   navigate('/')
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#580052] p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto animate-pulse" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Thank You!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          Your submission has been received successfully. We appreciate your response!
        </motion.p>
      </div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={handleBack}
        className="flex items-center px-4 py-2 bg-white text-[#580052] rounded-md shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2 font-bold" />
        Back to Events
      </motion.button>
    </div>
  );
};

export default ThankYou;
