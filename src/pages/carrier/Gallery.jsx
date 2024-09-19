import React from 'react';

function Gallery() {
  return (
    <div className='mx-4 md:mx-36 py-20'>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='border-2 rounded-2xl border-black w-full md:w-2/3 h-[60vh] md:h-screen'></div>
        <div id='column' className='flex flex-col gap-10 w-full md:w-1/3'>
          <div className="border-2 border-black h-1/2 flex rounded-2xl"></div>
          <div className="bg-white border-2 border-black h-1/2 flex rounded-2xl"></div>
        </div>
      </div>

      <div id='row' className='flex flex-col md:flex-row gap-10 justify-center pt-12 h-screen w-full'>
        <div className="bg-white border-2 border-black h-1/2 w-full  md:w-1/3 flex flex-col rounded-2xl"></div>
        <div className="bg-white border-2 border-black h-1/2 w-full md:w-1/3 flex flex-col rounded-2xl"></div>
        <div className="bg-white border-2 border-black h-1/2 w-full md:w-1/3 flex flex-col rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Gallery;
