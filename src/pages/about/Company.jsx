import React from 'react';

function Company() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row text-center justify-center items-center gap-6 md:gap-12">
        <div className="bg-blue-800 text-xl md:text-2xl items-center py-2 px-4 text-white rounded-full">
          Who we are
        </div>
        <div className="font-bold text-4xl md:text-7xl">About Our Company</div>
      </div>

      <div className="w-full flex flex-col md:flex-row my-12">
        <div className="w-full md:w-1/2 h-full text-wrap text-zinc-600 pl-4 md:pl-20 pr-4 md:pr-10 font-[600] text-lg md:text-xl">
          <p>
            <span className='text-black font-semibold'>Softkingo Technologies Pvt Ltd</span> is an 
            <span className='text-black font-semibold'> exclusive hub</span> of top dedicated 
            <span className='text-black font-semibold'> software developers, UI/UX designers, mobile app development experts, QA professionals, and product managers</span> with incredible rare and hidden talents. We provide access to the 
            <span className='text-black font-semibold'> top 1% of IT talent,</span> ranging from independent software developers to 
            <span className='text-black font-semibold'> fully managed teams.</span>
            <br /><br />
            Our team of professional web designers and developers is motivated by creativity, passion, current trends, and innovation. Some areas of expertise include 
            <span className='text-black font-semibold'> custom software development, web application development, CMS development, static and dynamic website development, as well as blogging website development.</span>
            <br />
            <span className='text-black font-semibold'>Softkingo</span> is an 
            <span className='text-black font-semibold'> IT service and solutions company</span> that collaborates with companies worldwide to 
            <span className='text-black font-semibold'> shape the next generation of businesses.</span> We focus our efforts on a comprehensive 
            <span className='text-black font-semibold'> intelligence system</span> that spans multiple 
            <span className='text-black font-semibold'> industries and domains.</span>
            <br /><br />
            <span className='text-black font-semibold'>Softkingo</span> is an 
            <span className='text-black font-semibold'> ISO-certified web, mobile app, and digital marketing (SEO, SEM, SMO)</span> development company with offices in the 
            <span className='text-black font-semibold'> United States, Canada,</span> and 
            <span className='text-black font-semibold'> Australia,</span> along with a 
            <span className='text-black font-semibold'> headquarters in New Delhi, India.</span> Our team consists of over  
            <span className='text-black font-semibold'> 40+ highly skilled, experienced, and enthusiastic professionals.</span>
          </p>
        </div>

        <div className="w-full md:w-1/2 h-full mt-7 md:mt-0 md:mr-2 pl-4 md:pl-10">
          <div className='w-full'>
            <div className='flex justify-between px-4 md:px-10 py-5 items-center border-b-4 mb-3 rounded-full font-bold text-lg md:text-xl'>
              <h1>01. Our vision</h1>
              <img className="w-6 h-6" src="src/assets/plus.png" alt="" />
            </div>

            <div className='flex justify-between px-4 md:px-10 py-5 items-center border-b-4 mb-3 rounded-full font-bold text-lg md:text-xl'>
              <h1>02. Our mission</h1>
              <img className="w-6 h-6" src="src/assets/plus.png" alt="" />
            </div>

            <div className='flex justify-between px-4 md:px-10 py-5 items-center border-b-4 mb-3 rounded-full font-bold text-lg md:text-xl'>
              <h1>03. Our core values</h1>
              <img className="w-6 h-6" src="src/assets/plus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
