import React from 'react'
import { FaHtml5 } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p> Skills</p>
            <h2>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaHtml5 size='60'/>
                        <p>HTML</p>
                    </div>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Skills