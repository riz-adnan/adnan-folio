import React,{ useRef } from 'react'
import { motion,useTransform,useScroll} from "framer-motion"
import Lottie from "lottie-react";
import Scroll from './Scroll';
import Parallax from './Parallax';
import about from "../../../public/media/lotties/FloatingYogaMan(About).json";


const boxVariants = {
    initial:{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
    },
    animate:{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        transition: { duration:0.7,delay:1,type:'tween',ease:'linear'}
    }
}
const About = () => {
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll()
    const toRight = useTransform(scrollYProgress,[0,1],[-200,200])
    const toLeft = useTransform(scrollYProgress,[0,1],[0,-2000])  
    const toRight1 = useTransform(scrollYProgress,[0,1],[-1000,100])
    const toRight2 = useTransform(scrollYProgress,[0,1],[100,-1000])
    const toUp = useTransform(scrollYProgress,[0,1],[10,-800])
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return (
        <div className='bg-[#000] text-white'>
            
            <motion.div 
                className="font-extrabold leading-[4rem] tracking-tighter text-10xl text-white mt-10 whitespace-nowrap uppercase"
                style={{x:toRight}}
            >   
                <span className='font-mine sm1:text-7xl md:text-10xl'>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                </span>
            </motion.div>
            <motion.div 
                style={{x:toLeft}}
                className="relative z-20 font-extrabold tracking-tighter text-white uppercase md:-mt-10 text-10xl whitespace-nowrap sm1:-mt-4"
            >
                <span className='font-mine sm1:text-7xl md:text-10xl'>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>—
                    <span>myself </span>
                </span>
            </motion.div>
            
            <div className="mt-24 ">
  <div className="relative z-10 m-auto border-0 md:grid md:grid-cols-1 xl:w-3/5 mt-28">
    <div className="  text-lg leading-relaxed space-y-8">
      <div>
        🎓✨ Currently, I’m a final-year Engineering graduate from one of India's most prestigious universities – 
        <span className="text-blue-400 font-bold"> IIT</span>.  
        🚀 I’m a passionate and driven individual with a natural knack for 
        <span className="text-blue-400 font-bold"> software development</span>.  
        🔍 My journey as a developer is fueled by an 
        <span className="text-blue-400 font-bold"> unyielding curiosity</span> to explore new technologies and the 
        <span className="text-blue-400 font-bold"> satisfaction of solving complex problems</span>.  
        💡 I thrive on crafting innovative solutions that not only meet technical requirements but also create 
        <span className="text-blue-400 font-bold"> meaningful user experiences</span>.
      </div>
      <div>
        🌟 I’m someone who embraces 
        <span className="text-blue-400 font-bold"> challenges with enthusiasm</span> and sees every project as an opportunity to 
        <span className="text-blue-400 font-bold"> learn, grow, and push boundaries</span>.  
        😊 My happy-go-lucky personality and approachable nature make me a 
        <span className="text-blue-400 font-bold"> collaborative team player</span>, always ready to brainstorm ideas and bring 
        <span className="text-blue-400 font-bold"> fresh perspectives</span> to the table.
      </div>
      <div>
        🖥️ For me, software development isn’t just a profession – it’s a 
        <span className="text-blue-400 font-bold"> craft that blends creativity and logic</span>.  
        ⚙️ Whether it’s designing seamless 
        <span className="text-blue-400 font-bold"> user interfaces</span>, building robust 
        <span className="text-blue-400 font-bold"> backend systems</span>, or exploring emerging technologies like 
        <span className="text-blue-400 font-bold"> Web 3 and AI</span>, I take pride in bringing 
        <span className="text-blue-400 font-bold"> concepts to life with precision and purpose</span>.
      </div>
      <div>
        🌍 Above all, I believe in the 
        <span className="text-blue-400 font-bold"> power of technology</span> to make a difference, and I’m constantly inspired by the opportunities it presents to 
        <span className="text-blue-400 font-bold"> innovate and improve the world around us</span>.  
        ✨ Let’s create something extraordinary together! 🚀
      </div>
    </div>
  </div>
</div>

            <div className='lg:pb-80'>
                <Scroll />      
            </div>
        </div>
  )
}
export default About
