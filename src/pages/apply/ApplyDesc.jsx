import React from 'react'

function ApplyDesc() {
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

        <div className='w-1/2 border border-zinc-100 shadow-xl shadow-blue-100 rounded-lg pt-14 pb-10 px-24 flex flex-col gap-7'>
            <div className='border-2 border-blue-600 rounded-lg text-blue-900 w-full h-32 pt-2 px-3'>
                <div className='flex items-center align-middle justify-between'>
                <div className='flex align-middle items-center gap-3'>
                    <img className='size-8' src="src\assets\info.png" alt="" />
                    <h2 className='font-semibold text-lg'>This job has Application limits</h2>
                </div>
                <div> 
                    <img className='size-10' src="src\assets\up.png" alt="" />
                </div>
                </div>
                <div className='text-blue-900 text-base font-medium px-3 pt-3'>Please Note: We cannot accept more than one application per candidate per job.
                If you have applied to this job already, you will be unable to apply again for 90 days.</div>
                </div>

            <div>
                <form>
                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">First Name*</label>
                <input class="w-full h-12 bg-gray-100 mb-3 text-gray-400 rounded-md mt-1 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50" type="text" placeholder="Type here..."/>
                {/* <p class="text-red-500 text-xs mb-3">Enter valid Name type</p> */}

                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">Last Name*</label>
                <input class="w-full h-12 bg-gray-100 mb-3 text-gray-400 rounded-md mt-1 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50" type="text" placeholder="Type here..."/>
                {/* <p class="text-red-500 text-xs mb-3">Enter valid Name type</p> */}
                
                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">Email Id*</label>
                <input class="w-full h-12 bg-gray-100 mb-3 text-gray-400 rounded-md mt-1 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50" type="email" placeholder="Type here..."/>
                {/* <p class="text-red-500 text-xs mb-3">Enter valid Email Id</p> */}
                
                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">Mobile No.</label>
                <input class="w-full h-12 bg-gray-100 mb-3 text-gray-400 rounded-md mt-1 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50" type="tel" placeholder="Type here..."/>
                {/* <p class="text-red-500 text-xs mb-3">Enter valid Mobile</p> */}
                
                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">Linkedin Profile</label>
                <input class="w-full h-12 bg-gray-100 mb-3 text-gray-400 rounded-md mt-1 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50" type="url" placeholder="Type here..."/>
                {/* <p class="text-red-500 text-xs mb-3">Enter valid URL</p> */}
                
                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">Resume</label>
                <input class="w-full h-28 border-2 mb-3 border-dashed text-black rounded-md mt-1 py-3 px-4 leading-tight text-center focus:outline-none focus:bg-gray-50" type="file" placeholder='or drag and drop here...'/>
                {/* <p class="text-red-500 text-xs mb-3">Upload files from the following type: .doc, .pdf, etc</p> */}
                
                <label class="tracking-wide text-gray-500 text-lg font-semibold pb-5">How many years of experience do you have</label>
                <input class="w-full h-12 bg-gray-100 mb-3 text-gray-400 rounded-md mt-1 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50" type="number" placeholder="Type here..."/>
                {/* <p class="text-red-500 text-xs mb-3">Enter valid number</p> */}
                </form>
            </div>

            <button className='w-full h-12 align-middle justify-center bg-blue-700 text-white rounded-md font-normal text-xl'>Submit Application</button>
        </div>
    </div>  
)}

export default ApplyDesc