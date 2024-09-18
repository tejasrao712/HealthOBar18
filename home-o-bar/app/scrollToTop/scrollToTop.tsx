'use client';

import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

function scrollToTop() {
  return (
    <div className='fixed bottom-6 right-6 z-50'>
        {/* Go to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 p-2 sticky bg-[#C59C94] rounded-full text-white hover:bg-[#B6827A] flex items-center"
          >
          <FaArrowCircleUp className="text-xl" />
          <span className="ml-2">Top</span>
          </button>
    </div>
  )
}

export default scrollToTop