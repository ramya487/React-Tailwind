import React from 'react'

const Card = ({url, title, cost, p1, p2, p3, id}) => {
  return (
    <div className='hover:scale-105 transition duration-300 cursor-pointer'>
    <div className={`flex flex-col gap-7 p-7 justify-center items-center shadow-xl rounded relative ${id === 2 && "bg-gray-100"}`}>
        <div className='flex justify-center items-center'><img src={url} alt="Image" height={80} width={80} className='md:absolute md:top-[-10%] md:left-[43%] static'/></div>
        <div className='font-bold text-2xl'>{title}</div>
        <div className='text-2xl font-bold'>${cost}</div>
        <div className='border-y border-gray-200 w-full text-center py-2'>{p1}</div>
        <div className='border-y border-gray-200 w-full text-center py-2'>{p2}</div>
        <div className='border-y border-gray-200 w-full text-center py-2'>{p3}</div>
        <div><button className='bg-[#40F8FF] text-black py-2 px-6 rounded hover:bg-slate-400'>Start Trial</button></div>
    </div>
    </div>
  )
}

export default Card