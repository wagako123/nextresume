import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect}from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import {BG} from '/public/assets/correctbg.png'


const Navbar = () => {

  const [nav, setNav]=useState(false);
  const [shadow, setShadow]= useState(false);
  const [navBg, setNavBg]= useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router=useRouter;
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

  useEffect(()=>{
    if(
      router.asPath ==='/Photo'
    ){
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])

  const handleNav= ()=>{
   setNav(!nav)
  };
  
  useEffect(()=> {
    const handleShadow=()=>{
      if (window.scrollY>= 90){
        setShadow(true)
      } else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  return (
    <div style={{backgroundColor: `${navBg}`}}
     className={ shadow? 'fixed w-full h-20 shadow-xl z-{100}':'fixed w-full h-20 z-{100}'}>
      <div className='flex justify-between items-center w-full h-full px-2 xl:px-16'>
        <Link href='/'>
        <Image src={BG} alt='/' width='90' height='150'/>
        </Link>
        <div>
          <ul style={{color:`${linkColor}`}} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#About'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#Skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>skills</li>
            </Link>
            <Link href='/#Projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>projects</li>
            </Link>
            <Link href='/#Contacts'>
              <li className='ml-10 text-sm uppercase hover:border-b'>contacts</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden w-full'>
            <AiOutlineMenu size='25'/>
            
          </div>
        </div>

      <div className={nav ?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
        <div className={nav ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed left-[-100%]  p-10 ease-in duration-500 '}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
              <Image onClick={()=>setNav(false)} src={BG} alt='/' width='150' height='80'/>
              </Link>
              <div onClick={handleNav} className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-400 my-4'>
              <p>Let&apos;s build something awesome together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
              <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#About'>
              <li  onClick={()=>setNav(false)}className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#Skills'>
              <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#Projects'>
              <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#Contacts'>
              <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-gray-400' > let&apos;s connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
                          <BsFillPersonLinesFill/>
                        </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Navbar