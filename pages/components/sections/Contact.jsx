import React, { useState } from 'react'
import Confetti from 'react-confetti';

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub,FiInstagram } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";

const ContactNew = () => {
    const [ isSubmitted,setSubmitted ] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const submitForm = async (e) => {
        e.preventDefault()  
        try{
            const res = await fetch('/api/formHandler',{
                method:'POST',
                body:JSON.stringify({
                    name,
                    email,
                    message
                }),
                headers:{
                    'content-type':'application/json',
                }
            })
            if(res.status === 200){
                setSubmitted(true)
            }
        } catch(error){
            console.log("Error occurred : "+error)
        } 
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div>
        {
            isSubmitted ? 
            (
                <div className='border-0 border-red-500'>
                    {/* <div className='absolute sm1:top-[315rem] sm2:top-[321rem] sm3:top-[324rem] border-0 border-red-500'>
                        <Confetti width={500}/>
                    </div> */}
                    <div>
                          </div>    
                    <div className='m-auto font-normal text-blue-400 border-0 border-red-500 sm1:w-4/5 lg:w-3/5 xl:w-full md:text-center sm1:text-3xl md:text-5xl'>Thanks for reaching out, I&apos;ll contact you soon</div>
                    <div className='flex justify-around w-full m-auto mt-20 text-white border-0 border-red-500'>
                        <div className='flex border-0 border-red-500 xl:space-x-20 sm1:flex-col xl:flex-row sm1:space-y-2 md:space-y-8 xl:space-y-0'>
                            <a href="mailto:rizviadnan79@gmail.com" className='border-0 border-red-500'>
                                <div className='flex flex-row space-x-4 sm1:hidden md:flex'>
                                    <div className='text-blue-400 rounded-full md:p-3 sm1:p-2 sm1:text-2xl lg:text-4xl md:text-5xl bg-blue-400/30'><FaGraduationCap /></div>
                                    <div className='leading-[1rem]'>
                                        <p className='sm1:text-sm md:text-lg'>rizviadnan79@gmail.com</p>
                                        <p className='sm1:text-xs md:text-sm text-white/50'>Email</p>
                                    </div>
                                </div>
                            </a>
                            <a href="tel:+91 9917763508" className='border-0 border-red-500'>    
                                <div className='flex flex-row space-x-4'>
                                    <div className='text-blue-400 rounded-full md:p-3 sm1:p-2 sm1:text-2xl lg:text-4xl md:text-5xl bg-blue-400/30'><PiPhoneCallFill /></div>
                                    <div className='leading-[1rem]'>
                                        <p className='sm1:text-md md:text-lg'>+91 9917763508</p>
                                        <p className='sm1:text-sm md:text-sm text-white/50'>Call me at</p>
                                    </div>
                                </div>
                            </a>    
                            <a href="mailto:rizviadnan79@gmail.com" className='border-0 border-red-500'>
                                <div className='flex flex-row space-x-4'>
                                    <div className='text-blue-400 rounded-full md:p-3 sm1:p-2 sm1:text-2xl lg:text-4xl md:text-5xl bg-blue-400/30'><MdAlternateEmail /></div>
                                    <div className='leading-[1rem]'>
                                        <p className='sm1:text-md md:text-lg'>rizviadnan79@gmail.com</p>
                                        <p className='sm1:text-sm md:text-sm text-white/50'>Personal Email</p>
                                    </div>
                                </div> 
                            </a> 
                            <div className='flex space-x-4 border-0 border-red-500 sm1:pt-8 md:pt-4 lg:pt-0 md:text-3xl sm1:text-3xl lg:text-2xl'>
                                <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://github.com/riz-adnan" target="_blank" rel="noreferrer" ><FiGithub /></a>
                                <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://www.instagram.com/iamrizvi_adnan/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                                <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://www.linkedin.com/in/adnan-rizvi-271165227/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://drive.google.com/file/d/1wsoqvmhNkwZfAJGvp5iui5ZWHChsJ7-m/view?usp=sharing" target="_blank"><IoDocumentTextOutline /></a>
                            </div>
                        </div>           
                    </div>
                </div>    
            ) :
            (
                <>
                    <div className='relative z-10 flex w-10/12 m-auto text-white border-0 border-red-500 lg:flex-row sm1:flex-col'>
                        <div className='sm1:w-full lg:w-3/5'>
                            <div className='border-0 border-blue-500 sm1:text-5xl md:text-9xl sm2:text-6xl sm3:text-7xl lg:text-8xl xl:text-10xl'>
                                <div className='font-extrabold leading-tight tracking-tighter'>Let<span className='text-blue-400'>&apos;</span>s <span className='font-stencil2'>work</span></div>
                                <div className='font-extrabold leading-tight tracking-tighter sm1:-mt-4 md:-mt-12 lg:-mt-12'><span className='sm1:text-5xl md:text-8xl'>— </span><span className='text-blue-400'>together</span></div>
                            </div> 
                        </div>
                        <div className='border-0 border-orange-500 sm1:w-full lg:w-2/5'>
                            <div className='border-0 border-green-500'>
                               </div>
                        </div>        
                    </div>    
                    <div className='relative z-10 flex w-10/12 m-auto text-white lg:flex-row sm1:flex-col lg:space-x-12'>
                        <div className='sm1:w-full lg:w-4/5 lg:-mt-20 xl:mt-10'>
                            <div className='p-10 m-auto border-0 xl:-mt-14 sm1:mt-12 md:mt-20 lg:mt-72 border-white/30 rounded-xl bg-blue-400/0 box-shadow-outForm'>    
                                <form onSubmit={submitForm} className='sm1:space-y-8 md:space-y-16 rounded-2xl'>
                                    <div className='font-light tracking-tighter sm1:text-3xl md:text-6xl'>Get <span className='text-white'>in</span> touch</div>
                                    <div className='flex flex-col space-y-0 xl:space-y-2'>
                                        <label className='flex flex-row text-white'><span className='mt-0 font-normal sm1:text-lg md:text-2xl lg:text-xl'>What&apos;s your name ?</span></label>
                                        <input type='text' placeholder='Enter your name' value={name} onChange={ (e) => setName(e.target.value) } required className='p-2 text-white bg-transparent pl-0 focus:pl-2 border-b-[0.01rem] border-blue-400 focus:ring focus:rounded-xl focus:border-blue-400 focus:outline-none md:w-full lg:w-full'></input>
                                    </div>
                                    <div className='flex flex-col space-y-0 xl:space-y-2'>
                                        <label className='flex flex-row text-white'><span className='mt-0 font-normal sm1:text-lg md:text-2xl lg:text-xl'>What&apos;s your email ?</span></label>
                                        <input type='email' placeholder='Enter your email address' value={email} onChange={ (e) => setEmail(e.target.value) } required className='p-2 text-white bg-transparent pl-0 focus:pl-2 border-b-[0.01rem] border-blue-400 focus:ring focus:rounded-xl focus:border-blue-400 focus:outline-none md:w-full lg:w-full'></input>
                                    </div>
                                    <div className='flex flex-col space-y-0 xl:space-y-2'>
                                        <label className='flex flex-row text-white'><span className='mt-0 font-normal sm1:text-md md:text-2xl lg:text-xl'>Type in your message</span></label>
                                        <textarea type='name' placeholder='Enter your message' value={message} onChange={ (e) => setMessage(e.target.value) } required className='p-2 text-white bg-transparent pl-0 focus:pl-2 border-b-[0.01rem] border-blue-400 focus:ring focus:rounded-xl focus:border-blue-400 focus:outline-none md:w-full lg:w-full'></textarea>
                                    </div>
                                    <div className='flex flex-row md:space-x-10 sm1:space-x-4'>
                                        <button type='submit' className='font-extrabold text-black bg-blue-400 transform transition ease-in-out duration-300 hover:scale-[1.05] sm1:p-1 md:text-2xl sm1:w-full lg:w-3/4 md:p-4 rounded-xl'>Send</button>
                                        <button type='submit' onClick={()=>{
                                            setEmail('')
                                            setName('')
                                            setMessage('')
                                        }} 
                                        className='font-extrabold text-black bg-blue-400 transform transition ease-in-out duration-300 hover:scale-[1.05] sm1:p-1 md:text-2xl sm1:w-full lg:w-3/4 md:p-4 rounded-xl'>Reset All</button>
                                    </div>
                                </form> 
                            </div>
                        </div>
                        <div className='sm1:w-full lg:w-3/5 lg:mt-96 xl:mt-60 sm1:mt-12 md:mt-28 xl:w-full'>
                            <div className='flex flex-col w-full border-0 border-blue-500 sm1:mt-4 md:mt-0 md:space-y-4'>
                                <div className='flex xl:space-x-20 sm1:flex-col xl:flex-row sm1:space-y-2 md:space-y-8 xl:space-y-0'>
                                    <a href="mailto:rizviadnan79@gmail.com">
                                        <div className='flex flex-row space-x-4 sm1:hidden md:flex'>
                                            <div className='text-blue-400 rounded-full md:p-3 sm1:p-2 sm1:text-2xl lg:text-4xl md:text-5xl bg-blue-400/30'><FaGraduationCap /></div>
                                            <div className='leading-[1rem]'>
                                                <p className='sm1:text-sm md:text-lg'>rizviadnan79@gmail.com</p>
                                                <p className='sm1:text-xs md:text-sm text-white/50'> Email</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="tel:+91 9917763508">    
                                        <div className='flex flex-row space-x-4'>
                                            <div className='text-blue-400 rounded-full md:p-3 sm1:p-2 sm1:text-2xl lg:text-4xl md:text-5xl bg-blue-400/30'><PiPhoneCallFill /></div>
                                            <div className='leading-[1rem]'>
                                                <p className='sm1:text-md md:text-lg'>+91 7080995469</p>
                                                <p className='sm1:text-sm md:text-sm text-white/50'>Call me at</p>
                                            </div>
                                        </div>
                                    </a>    
                                </div> 
                                <div className='flex sm1:flex-col md:flex-row lg:flex-col xl:flex-row'>
                                    <a href="mailto:rizviadnan79@gmail.com">
                                        <div className='flex flex-row space-x-4'>
                                            <div className='text-blue-400 rounded-full sm1:mt-4 md:p-3 sm1:p-2 sm1:text-2xl lg:text-4xl md:text-5xl bg-blue-400/30'><MdAlternateEmail /></div>
                                            <div className='leading-[1rem] sm1:mt-4'>
                                                <p className='sm1:text-md md:text-lg'>rizviadnan79@gmail.com</p>
                                                <p className='sm1:text-sm md:text-sm text-white/50'>Personal Email</p>
                                            </div>
                                        </div> 
                                    </a> 
                                    <div className='flex border-0 border-red-500 sm1:mt-8 lg:ml-0 md:ml-10 xl:ml-auto xl:w-2/5 sm1:w-4/5 md:w-3/5 lg:w-4/5 sm1:justify-between md:text-3xl sm1:text-3xl lg:text-2xl'>
                                        <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://github.com/riz-adnan" target="_blank" rel="noreferrer" ><FiGithub /></a>
                                        <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://www.instagram.com/iamrizvi_adnan/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                                        <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://www.linkedin.com/in/adnan-rizvi-271165227/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                        <a className='text-blue-400 rounded-full sm1:p-2 md:p-4 bg-blue-400/20' href="https://drive.google.com/file/d/1wsoqvmhNkwZfAJGvp5iui5ZWHChsJ7-m/view?usp=sharing" target="_blank"><IoDocumentTextOutline /></a>
                                    </div>
                                </div>           
                            </div>
                        </div>
                    </div> 
                </>
            )
        }       
        </div>
    )
}
export default ContactNew