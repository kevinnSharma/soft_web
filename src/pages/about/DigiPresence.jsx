import React from 'react';

function DigiPresence() {
  return (
    <div className='mb-20 sm:px-6 lg:px-8'>
      <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-8'>
        Digital Presence
      </h2>
      <div className='flex h-40 w-full items-center justify-evenly bg-blue-700'>
        <div className='flex-shrink-0 w-28 sm:w-36 md:w-56'>
          <img src="src/assets/issuewire.png" alt="IssueWire" className='h-full object-contain' />
        </div>
        <div className='flex-shrink-0 w-24 sm:w-32 md:w-44'>
          <img src="src/assets/bloomberg.png" alt="Bloomberg" className='h-full object-contain' />
        </div>
        <div className='flex-shrink-0 w-20 sm:w-28 md:w-40'>
          <img src="src/assets/bbc.png" alt="BBC" className='h-full object-contain' />
        </div>
        <div className='flex-shrink-0 w-16 sm:w-20 md:w-20'>
          <img src="src/assets/tc.png" alt="TC" className='h-full object-contain' />
        </div>
        <div className='flex-shrink-0 w-28 sm:w-36 md:w-56'>
          <img src="src/assets/huffpost.png" alt="HuffPost" className='h-full object-contain' />
        </div>
      </div>
    </div>
  );
}

export default DigiPresence;
