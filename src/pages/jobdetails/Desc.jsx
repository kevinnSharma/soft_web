import React from 'react'

function Desc() {
  return (
    <div className='w-screen flex pt-10 pl-20 pb-20 gap-7'>
        <div className='w-[22rem]'>
            <h3 className='font-bold text-lg'>Job Location</h3>
            <h4 className='text-zinc-700 pt-3 text-lg'>Noida</h4>
            <hr></hr>
            <br/>

            <h3 className='font-bold text-lg'>Job Type</h3>
            <h4 className='text-zinc-700 pt-3 text-lg'>Full time</h4>
            <hr></hr>
            <br/>

            <h3 className='font-bold text-lg'>Department</h3>
            <h4 className='text-zinc-700 pt-3 text-lg'>Apply for Junior Full Stack Developer</h4>
        </div>

        <div className='w-1/2 border border-zinc-100 shadow-xl shadow-blue-100 rounded-lg px-24 pt-14 pb-10 flex flex-col gap-16'>
            <div>
                <h2 className='font-semibold text-lg'>Job Description</h2>
                <h4 className='text-lg pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel dicta quae dolor. At tenetur soluta fugiat nulla ea eligendi sunt repudiandae. Corrupti porro commodi repellat quas? Molestias, labore necessitatibus!</h4>
            </div>

            <div>
                <h2 className='font-semibold text-lg'>What you will be doing</h2>
                <ol className='text-lg pt-3'>
                    <li>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>2. Lorem ipsum dolor sit amet</li>
                    <li>3. Lorem ipsum dolor sit amet</li>
                    <li>4. Lorem ipsum dolor sit amet</li>
                    <li>5. Lorem ipsum dolor sit amet</li>
                </ol>
            </div>

            <div>
                <h2 className='font-semibold text-lg'>What are we looking for from you</h2>
                <h4 className='text-lg pt-3'>Essential:</h4>
                <ol className='text-lg'>
                    <li>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>2. Lorem ipsum dolor sit amet.</li>
                    <li>3. Lorem ipsum dolor sit amet.</li>
                </ol>

                <h4 className='text-lg pt-6'>Desirable:</h4>
                <ol className='text-lg'>
                    <li>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>2. Lorem ipsum dolor sit amet.</li>
                    <li>3.Lorem ipsum dolor sit amet.</li>
                </ol>
            </div>
            <button className='w-full h-12 align-middle justify-center bg-blue-700 text-white rounded-md font-normal text-xl'>Apply Now</button>
        </div>
    </div>
  )
}

export default Desc