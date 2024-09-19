import React from 'react'
import Home from './Home'


function Tabs() {
  return (
    <div className='h-[6rem] w-full border-b flex pt-14 pb-0 pl-20 gap-12'>
      <button className='font-bold text-3xl text-blue-800 underline underline-offset-8'><pre> Job Details </pre></button >
      <button className='font-normal text-3xl text-zinc-500' onclick="myFunction()">Apply</button>
    </div>
  )
}

export default Tabs