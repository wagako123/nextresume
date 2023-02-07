import React from 'react'
import { BsBootstrap, BsGithub } from 'react-icons/bs'
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaLaravel, FaNode, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import{DiDjango, DiGit} from 'react-icons/di'
import{SiFirebase, SiMysql, SiNextdotjs, SiPostgresql, SiTailwindcss} from 'react-icons/si'


const Skills = () => {
  return (
    <div className='w-full lg:h-screen2 p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='py-4 uppercase text-2xl tracking-widest text-[#545454]'> Skills</p>
            <h2>What I can do</h2>
            <h2>Presentation Tier</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaHtml5 size='60'/>
                        <p className='text-2xl justify-center'>HTML</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaCss3 size='60'/>
                        <p className='text-2xl justify-center'>CSS</p>
                    </div>
                </div>
               <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaJs size='60'/>
                        <p className='text-2xl justify-center'>JavaScript</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaNode size='60'/>
                        <p className='text-2xl justify-center'>Node</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaPhp size='60'/>
                        <p className='text-2xl justify-center'>php</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaPython size='60'/>
                        <p className='text-2xl justify-center'>python</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <DiDjango size='60'/>
                        <p className='text-2xl justify-center'>Django</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaLaravel size='60'/>
                        <p className='text-2xl justify-center'>Laravel</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaReact size='60'/>
                        <p className='text-2xl justify-center'>React</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <FaBootstrap size='60'/>
                        <p className='text-2xl justify-center'>Bootstrap</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <SiTailwindcss size='60'/>
                        <p className='text-2xl justify-center'>Tailwindcss</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <SiNextdotjs size='60'/>
                        <p className='text-2xl justify-center'>NextJS</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <SiMysql size='60'/>
                        <p className='text-2xl justify-center'>MySQL</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <SiPostgresql size='60'/>
                        <p className='text-2xl justify-center'>Postgresql</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <SiFirebase size='60'/>
                        <p className='text-2xl justify-center'>Firebase</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <SiPostgresql size='60'/>
                        <p className='text-2xl justify-center'>Postgresql</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <BsGithub size='60'/>
                        <p className='text-2xl justify-center'>Github</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <DiGit size='60'/>
                        <p className='text-2xl justify-center'>Git</p>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid  grid-cols-2 gap-4 justify-center item-center'>
                        <DiGit size='60'/>
                        <p className='text-2xl justify-center'>Git</p>
                    </div>
                </div>
                
                
                



            </div>

        </div>
        
    </div>
  )
}

export default Skills