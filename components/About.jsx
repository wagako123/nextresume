import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='py-4 uppercase text-2xl tracking-widest text-[#545454]'>About</p>
                <h2 className='py-4'>Who am I</h2>
                <p className='text-gray-700 py-2'>I'm a software engineer</p>
                <p className='text-gray-700 py-2'>I have spent a while wearing many hats, playing many different roles and gigs on my journey to
                    becoming a graduand. I have built this portfolio site to show off some of the skills I've gained 
                    and projects I'm working on.
                </p>
                <p className='text-gray-700 py-2'>
                    Of all the roles I've worked, I enjoyed development most and would really love to explore it and 
                    further  enhance my skills and gain more experience so as to do my part and use my skills, talents and abilities
                    to chance the world as software developed by an individual or team really does have the ability to grow to the extent it 
                    in hands across the world
                </p>
                <p className='text-gray-700 underline cursor-pointer'>check out some of my latest projects</p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About