import Image from 'next/image'
import React from 'react'
import {RiRadioButtonFill} from 'react-icons/ri' 
import Link from 'next/link'
import portfolio from '/public/assets/logowbg.png'
import shelterzone from '/public/assets/shelterzones.png'



const Dynamics = () => {
  return (
    <div className='w-full'>
      <div className='w-screen  h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute' layout='fill' objectFit='cover' src={shelterzone} alt='/'/>

        
        <div className='absolute top-[60%]  text-white z-10 p-2'>
          <h2 className='py-2'>Shelter Zone portfolio info site</h2>
          
        </div>
        

      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>I made this website for a client </p>
          <Link href="https://shelterzone.co.ke"><button className='px-8 py-2 mt-4'>Site </button></Link>
          <Link href="https://github.com/wagako123/photoporfolio"><button className='px-8 py-2 mt-4'>Code </button></Link>

          
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2 font-Bold pb-2 grid-cols-3 md:grid-cols-1'>
            <p>Technologies</p>
            <div><p className='flex items-center py-2'><RiRadioButtonFill/> HTML </p></div>
            <div><p className='flex items-center py-2'><RiRadioButtonFill/> CSS </p></div>
           

          </div>
        </div>
        <Link classname='underline cursor-pointer' href='/#Projects'> Back</Link>

      </div>
  
      
    </div>
  )
}

export default Dynamics;