import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
const Main = () => {
    
    const downloadResume =()=>{
        fetch('projects/Resume.pdf'). then (response =>{
        response.blob().then(blob=>{
            const fileURL= window.URL.createObjectURL(blob);
            let alink =document.createElement('a');
            alink.href=fileURL;
            alink.download='projects/Resume.pdf';
            alink.click();
        })
        })
    }
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together</p>
                <h1 className='py-4'>
                    Hi I&apos;m <span className='text-[#545454]'>Brian</span>
                    </h1>
                <h1 className='py-2'>A software developer</h1>
                <p className='py-4 mx-w-[70%] m-auto'>Hardworking College Student seeking employment. Bringing forth
                    a motivated attitude and a variety of powerful skills. Eager to
                    learn and grow.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://linkedin.com/in/brian-muturi-b42405266'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <FaLinkedinIn/>
                        </div>
                        </Link>
                        <Link href='https://github.com/wagako123'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <FaGithub/>
                        </div>
                        </Link>
                        <Link href='https://brianwagako@gmail.com'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <AiOutlineMail/>
                        </div>
                        </Link>
                        
                        <div onClick={downloadResume} className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <BsPersonLinesFill/>
                        </div>
                        

                    </div>
             </div>
        </div>
    </div>
  )
}

export default Main