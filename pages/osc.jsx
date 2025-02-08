import React from 'react'
import { OpenSourceContributions } from '../public/data/Contributions'
import { LuExternalLink } from "react-icons/lu";
import { IoGitPullRequestSharp } from "react-icons/io5";

import Image from 'next/image'
const Description = ({ title,status,description,link }) => {
    return (
        <div className="mt-16">
            <div className="justify-between text-white border-0 border-red-500 md:flex">
                <div className="flex font-bold text-blue-400 sm1:text-lg md:text-xl"><span>{title}</span><span className="mt-1 ml-8"><a href={link} target="_blank"><LuExternalLink /></a></span></div>
                <div className={`p-2 w-fit md:ml-2 text-sm text-white ${status === 'Merged' ? 'bg-[#8957E5]' : 'bg-[#238636]'} rounded-xl flex`}><span className="mt-1 mr-2 text-sm"><IoGitPullRequestSharp /></span><span>{status}</span></div>
            </div>
            <div className="mt-2">{description}</div>
        </div>
    )
}

const Contributions = () => {
  return (
    <div className="mb-20 text-white">
        <div className="font-extrabold tracking-tighter text-center text-blue-400 sm1:text-xl sm1:p-6 md:pl-20 md:text-6xl">
            Experience
        </div>
        
       <a href="https://lgcy.ltd" target='_blank'> <div className="sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mt-2 mb-2 ml-10 rounded-full border-white border-2 border-solid " alt="lgcy logo" src="/media/contributions/image.png" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">lgcy - Share Your Story</div>
            <div className="text-xl mt-4">Software Engineer | Remote (US) | Oct' 24 - Present </div>
            <div className="mt-4">
            Contributed to the creation of an AI-powered virtual influencer by fine-tuning large language models (LLMs) to develop a unique, engaging personality that resonated with users. Integrated conversational AI capabilities to enable dynamic, context-aware interactions, personalized recommendations, and participation in trending social media activities, significantly enhancing user engagement and interaction. Additionally, led the development of a comprehensive analytics dashboard for the social media platform, providing real-time insights into user engagement, content performance, and audience demographics through intuitive visualizations and tools.
             </div>
        </div>
        </a>

    <a href="https://thecareercompany.in/" target='_blank'>
        <div className="ml-auto sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="ml-auto mr-10 rounded-full border-white border-2 border-solid" alt="tcc logo" src="/media/images/image.png" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">The Career Company</div>
            <div className="text-xl mt-4">Software Engineering Intern | Remote (India) | May' 24 - Aug' 24 </div>
            <div className="mt-4">
            Played a pivotal role in the development of a robust job scraping system that streamlined the collection of job listings from various sources, providing users with a seamless and comprehensive job search experience. Actively contributed to the integration of AI technologies, enabling features such as intelligent matching and enhanced personalization across the platform. Spearheaded the creation of a mentor booking system, facilitating smooth scheduling and communication between users and mentors. Additionally, led the development of an AI-powered resume feature, which allowed users to generate and customize professional resumes using AI-driven suggestions, significantly improving user experience and operational efficiency. </div>
        </div>
        </a>

    <a href="https://www.chegg.com/" target='_blank'>
        <div className=" sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mr-10 rounded-full border-white border-2 border-solid "  src="/media/skills/chegg.png" alt="chegg logo" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Chegg</div>
            <div className="text-xl mt-4">Computer Science Specialist | Remote (India) | Nov' 22 - Feb' 23 </div>
            <div className="mt-4">
            Assisted more than 50 computer science students by delivering in-depth responses to their inquiries across various domains, such as Machine Learning, Data Structures and Algorithms, and Software Development. Maintained a rating of above 90% throughout. </div>
        
        
    </div>
    </a>
    <a href="https://sparkcareermentors.com/" target='_blank'>
    <div className="ml-auto sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="ml-auto mt-2 mb-2 ml-10 rounded-full border-white border-2 border-solid " alt="tls logo" src="/media/skills/spark.png" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Spark Career Mentors</div>
            <div className="text-xl mt-4">Mathematics Asessment Creator | Remote (India) | Sep' 22 - Nov' 22 </div>
            <div className="mt-4">
           Authored more than 200 questions for IITJEE candidates, intricately crafting challenging Mathematics problems, including those in
           Probability, Statistics and Linear Algebra.
           </div>
    </div>
    </a>
     <div className='flex justify-center mb-10'>
            <h1 className="text-4xl lg:text-6xl text-blue-500 font-extrabold"> Freelance/Volunteer Work</h1>
           </div>
           <div className='pl-20 justify-items-center text-2xl'>
            <h1 className='mb-5 '> As a Freelance Developer helped 3+ companies in setting up their website including <a href="https://turiyamlifestyle.com/" className='text-blue-400 underline'> Turiyam Lifestyle Fashion </a></h1> 
            <h1 className='mb-5'>  Led the development of Website and Metaverse of Tirutsava as Head of Web Dev Team of Tirutsava </h1>
            <h1 className='mb-5'> Held the position of Competitive Programming Head and Quantative Development Head in pre-final year. </h1>
            <h1 className='mb-5'> Led the website development of Entrepreneur Cell and Statistics Club of IIT Tirupati. </h1>
            
            <h1 className='mb-5'> Represented Institute as Internship Representative in pre-final year and Placement Representative in final year </h1>
            
            
          </div>
    </div>
  )
}

export default Contributions
