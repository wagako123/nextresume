import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
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
    <div id='Contacts' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest text-[#545454]'>Contact</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/*left*/} 
                <div className='col-span-2 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img classname='rounded-xl cursor-pointer hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' />
                        </div>
                        <div>
                            <h2 className='py-4'>Brian Muturi</h2>
                            <p className='font-bold'>Software developer</p>
                            <p className='py-4'>I am available for part time, fulltime on premise and remote roles</p>
                        </div>
                    
                    <div>
                        <p>Connect with me</p>
                        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <Link href='https://linkedin.com/in/brian-muturi-332183245'><FaLinkedinIn/></Link>
                        </div>
                        
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
                {/*right*/}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg flex border-gray-300' type="text"  />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg flex border-gray-300' type="text"  />
                                </div>

                            </div>
                            <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg flex border-gray-300' type="email"  />

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg flex border-gray-300' type="text"  />

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>

                    </div>
                     
                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact