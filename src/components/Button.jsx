import React from 'react'
import { motion } from 'framer-motion'
import arrow from '../assets/icon-arrow-right.svg'
import { useNavigate } from 'react-router-dom';


function Button() {
    const navigate = useNavigate();

    const handleNavigate = () =>{
    navigate('/location')
    }
    return (
    <div>
        <motion.a
        whileHover={{
            backgroundColor:['hsl(24, 56%, 63%)','hsl(0, 0%, 8%)'],
            transition: { duration: 0.3, ease: 'easeInOut' }

        }}
        onClick={handleNavigate} className='w-[13rem] items-center text-white overflow-hidden grid grid-cols-5 font-bigShoulders border-none cursor-pointer font-extrabold'>
            <div
            className=' bg-black flex justify-center items-center font-bigShoulders800 col-span-4 h-[3.5rem] lg:h-[4rem] p-1 place-items-center'>
            <span className='tracking-[1px] uppercase'>our location</span>
            </div>
            <div 
            className='h-[3.5rem] lg:h-[4rem] place-items-center bg-gold flex justify-center'>
            <img src={arrow} alt="arrow"  />
            </div>
              
        </motion.a>
    </div>
  )
}

export default Button