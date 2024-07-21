import React,{useEffect} from 'react'

import heroMobile from '../assets/mobile/image-hero.jpg'
import heroMobile2 from '../assets/mobile/image-hero@2x.jpg'
import heroTablet from '../assets/tablet/image-hero.jpg'
import heroTablet2 from '../assets/tablet/image-hero@2x.jpg'
import heroDesktop from '../assets/desktop/image-hero.jpg'
import heroDesktop2 from '../assets/desktop/image-hero@2x.jpg'
import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'
import Button from '../components/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <main>
      <div className='grid md:grid-cols-4 lg:grid-cols-7'>
        <div  className='hidden lg:block  bg-black relative col-span-2 z-10'>
          <img 
          src={logoLight} alt="logo dark" className='w-full h-full object-contain mb-6 transform translate-y-[-6rem] translate-x-[7rem] xl:translate-x-[9rem] mix-blend-difference z-10'/>
        </div>
        <div className='h-[15rem] md:col-span-2 md:h-full bg-white lg:col-span-3'>
          <picture>
            <source media="(min-width: 1200px)" type="image/webp" 
            srcSet={`${heroDesktop}, ${heroDesktop2} 2x`}/>
            <source media="(min-width: 768px)" type="image/webp" 
            srcSet={`${heroTablet}, ${heroTablet2} 2x`}/>
            <img
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            src={heroMobile}
            srcSet={`${heroMobile2} 2x`} alt="Two people looking at a photograph of an old lady in an art gallery" loading="eager" className='absolute md:relative w-full h-full max-h-[15rem] md:max-h-[43.75rem] md:w-full  max-w-none object-cover object-center z-0'/>
          </picture>
        </div>
        <div className='relative md:col-span-2 lg:col-span-2'>
        <article className='p-6 mt-5 md:transform md:-translate-x-10 xl:translate-x-[-5rem] md:translate-y-[7rem] lg:translate-y-28 '>
          <img src={logoDark} alt="logo dark" className='w-full object-cover mb-6 lg:hidden max-w-[50%]'/>
          <div>
            <p className='text-paracolor font-outfit font-light text-[1.125rem] leading-7 mb-8 md:text-2xl md:leading-8 md:mb-10 w-full xl:mix-blend-lighten'>
              The arts in the collection of the <strong className='text-black font-semibold'>Modern Art Gallery</strong> all started from a spark of inspiration.Will these pieces inspire you? <strong className='text-black font-semibold'>Visit us and find out.</strong>
            </p>
            <Button/>
            
          </div>
        </article>
        </div>
        
      </div>
    </main>
  )
}

export default Header