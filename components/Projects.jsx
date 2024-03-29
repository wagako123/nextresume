import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import portfolio from '/public/assets/logowbg.png'
import shelterzone from '/public/assets/shelterzones.png'



const Projects = () => {
  return (
    <div id='Projects' className='w-full h-full'>
        <div className='max-w-[1240px] mx-auto px-2 '>
            <p className='py-4 uppercase text-2xl tracking-widest text-[#545454]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#123456] to-[#545454] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={portfolio} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] lefft-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider  text-center'>Photo portfolio site</h3>
                      <p className='pb-4 pt-2 text-white text-center'>Next js</p>
                      <Link href='/Photo'>
                        <p className='text-center py-3 rounded-lg bg-gray-700 text-white'>More Info</p>
                        </Link>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#123456] to-[#545454] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={portfolio} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] lefft-[50%] translate-x-[-10%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider  text-center'>Dynamics to Odoo integrations</h3>
                      <p className='pb-4 pt-2 text-white text-center'>Dynamics & Odoo Apis</p>
                      <Link href='/Dynamics'>
                        <p className='text-center py-3 rounded-lg bg-gray-700 text-white'>More Info</p>
                        </Link>
                    </div>  
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#123456] to-[#545454] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={shelterzone} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] lefft-[50%] translate-x-[-10%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider  text-center'>Shelterzone Info Site</h3>
                      <p className='pb-4 pt-2 text-white text-center'>Html & CSS</p>
                      <Link href='/ShelterZone'>
                        <p className='text-center py-3 rounded-lg bg-gray-700 text-white'>More Info</p>
                        </Link>
                    </div>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects