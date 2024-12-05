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
        
        <div className="sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mt-2 mb-2 ml-10 rounded-full border-white border-2 border-solid " alt="lgcy logo" src="/media/contributions/image.png" height={200} width={200}></Image>
        
        <div className="text-5xl font-bold text-blue-400">lgcy - Share Your Story</div>
            <div className="text-xl mt-4">Software Engineer | Remote (US) | Oct' 24 - Present </div>
            <div className="mt-4">
            Contributed to the creation of an AI-powered virtual influencer by fine-tuning large language models (LLMs) to develop a unique, engaging personality that resonated with users. Integrated conversational AI capabilities to enable dynamic, context-aware interactions, personalized recommendations, and participation in trending social media activities, significantly enhancing user engagement and interaction. Additionally, led the development of a comprehensive analytics dashboard for the social media platform, providing real-time insights into user engagement, content performance, and audience demographics through intuitive visualizations and tools.
             </div>
        </div>

        <div className="ml-auto sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="ml-auto mr-10 rounded-full border-white border-2 border-solid " alt="tcc logo" src="/media/images/image.png" height={200} width={200}></Image>
        
        <div className="text-5xl font-bold text-blue-400">The Career Company</div>
            <div className="text-xl mt-4">Software Engineering Intern | Remote (India) | May' 24 - Aug' 24 </div>
            <div className="mt-4">
            Played a pivotal role in the development of a robust job scraping system that streamlined the collection of job listings from various sources, providing users with a seamless and comprehensive job search experience. Actively contributed to the integration of AI technologies, enabling features such as intelligent matching and enhanced personalization across the platform. Spearheaded the creation of a mentor booking system, facilitating smooth scheduling and communication between users and mentors. Additionally, led the development of an AI-powered resume feature, which allowed users to generate and customize professional resumes using AI-driven suggestions, significantly improving user experience and operational efficiency. </div>
        </div>
        <div className="sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mt-2 mb-2 ml-10 rounded-full border-white border-2 border-solid " alt="tls logo" src="/media/images/turiyam.png" height={200} width={200}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Turiyam Lifestyles</div>
            <div className="text-xl mt-4">Software Engineering Intern | Remote (India) | May' 23 - Aug' 23 </div>
            <div className="mt-4">
            Developed and managed a scalable e-commerce platform using Python and MySQL, ensuring efficient handling of core business functions like inventory management, user authentication, and order tracking. Leveraged Flask to build secure backend services, including robust payment processing to maintain reliability and trust. Additionally, created an employee commission system that streamlined the calculation and distribution of commissions based on sales performance. Designed and implemented a dedicated portal for employees, allowing them to manage their referrals and track the people they brought into the system.  </div>
        </div>

        <div className="ml-auto sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="ml-auto mr-10 rounded-full border-white border-2 border-solid " alt="chegg logo" src="/media/skills/image.png" height={200} width={200}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Chegg India</div>
            <div className="text-xl mt-4">Computer Science Specialist | Remote (India) | Nov' 22 - Feb' 23 </div>
            <div className="mt-4">
            Assisted more than 50 computer science students by delivering in-depth responses to their inquiries across various domains, such as Machine Learning, Data Structures and Algorithms, and Software Development. Maintained a rating of above 90% throughout. </div>
        
        
    </div>
    <div className="sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mt-2 mb-2 ml-10 rounded-full border-white border-2 border-solid " alt="tls logo" src="/media/skills/spark.png" height={200} width={200}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Spark Career Mentors</div>
            <div className="text-xl mt-4">Mathematics Asessment Creator | Remote (India) | Sep' 22 - Nov' 22 </div>
            <div className="mt-4">
           Authored more than 200 questions for IITJEE candidates, intricately crafting challenging Mathematics problems, including those in
           Probability, Statistics and Linear Algebra.
           </div>
    </div>
    </div>
  )
}

export default Contributions
