import React from 'react'
import image1 from '../assets/mobile/image-grid-1.jpg'
import image1x2 from '../assets/mobile/image-grid-1@2x.jpg'
import image2 from '../assets/tablet/image-grid-1.jpg'
import image2x2 from '../assets/tablet/image-grid-1@2x.jpg'
import image3 from '../assets/desktop/image-grid-1.jpg'
import image3x2 from '../assets/desktop/image-grid-1@2x.jpg'
// second image
import imageMobile2 from '../assets/mobile/image-grid-2.jpg'
import imageMobile2ax2 from '../assets/mobile/image-grid-2@2x.jpg'
import imageTablet2 from '../assets/tablet/image-grid-2.jpg'
import imageTablet2bx2 from '../assets/tablet/image-grid-2@2x.jpg'
import imageDesktop2c from '../assets/desktop/image-grid-2.jpg'
import imageDesktopcx2 from '../assets/desktop/image-grid-2@2x.jpg'
//third image
import imageMobile3 from '../assets/mobile/image-grid-3.jpg'
import imageMobile3ax2 from '../assets/mobile/image-grid-3@2x.jpg'
import imageTablet3 from '../assets/tablet/image-grid-3.jpg'
import imageTablet3bx2 from '../assets/tablet/image-grid-3@2x.jpg'
import imageDesktop3c from '../assets/desktop/image-grid-3.jpg'
import imageDesktop3cx2 from '../assets/desktop/image-grid-3@2x.jpg'

function Cta() {
  return (
    <main className='bg-white grid place-items-center '>
        <section className='my-10 md:my-20 mx-6 grid-flow-col lg:max-w-[900px] xl:max-w-[1178px]'>
          <div className='grid md:grid-cols-5 md:gap-6'>
          <article className='bg-gray-100 p-4 mb-6 md:col-span-2 md:h-[34rem]'>
            <h2 className='font-bigShoulders font-black text-black text-[2rem] leading-[3rem] mb-6   md:mb-0 uppercase md:px-7 md:py-6 lg:text-5xl'>your day at the gallery</h2>
            <p className='text-paracolor font-outfit font-light text-2xl leading-7 mb-4  md:px-7'>wander through our distinct collections and find new about our artists.Dive into the details of their creative process. </p>
          </article>
          <div className='mb-6 md:mb-0  md:col-span-3'>
              <picture>
                <source media="(min-width: 1200px)" type="image/webp" 
                srcSet={`${image3}, ${image3x2} 2x`}/>
                <source media="(min-width: 768px)" type="image/webp" 
                srcSet={`${image2}, ${image2x2} 2x`}/>
                <img src={image1}
                srcSet={`${image1x2} 2x`} alt="image of the arts availbale" loading="eager"
                className='w-full h-full object-cover md:h-[34rem]'/>
              </picture>
          </div>
          </div>

          <div className='grid md:grid-cols-5 gap-y-6 md:gap-6'>
            <div className='col-span-3'>
            <picture>
            <source media="(min-width: 1200px)" type="image/webp" 
            srcSet={`${imageDesktop2c}, ${imageDesktopcx2} 2x`}/>
            <source media="(min-width: 768px)" type="image/webp" 
            srcSet={`${imageTablet2}, ${imageTablet2bx2} 2x`}/>
            <img src={imageMobile2}
            srcSet={`${imageMobile2ax2} 2x`} alt="image of the arts availbale" loading="eager"
            className='w-full h-full object-cover mb-6 md:mb-0 shadow-sm '/>
            </picture>
            </div>
            <div className='md:col-span-2  h-full'>
              <picture>
                <source media="(min-width: 1200px)" type="image/webp" 
                srcSet={`${imageDesktop3c}, ${imageDesktop3cx2} 2x`}/>
                <source media="(min-width: 768px)" type="image/webp" 
                srcSet={`${imageTablet3}, ${imageTablet3bx2} 2x`}/>
                <img src={imageMobile3}
                srcSet={`${imageMobile3ax2} 2x`} alt="image of the arts availbale" loading="eager"
                className='w-full md:h-full object-cover md:max-h-[49%] md:mb-5 mb-6'/>
              </picture>
              <article className='bg-darkGrey flex flex-col items-center justify-center p-6 md:max-h-[49%] md:h-full '>
              <h2 className='font-bigShoulders font-black text-white text-[2rem] leading-[3rem] mb-6   md:mb-0 uppercase md:px-7 md:py-6 lg:text-5xl'>Come & be inspired</h2>
              <p className='text-white font-outfit font-light text-[1.125rem] leading-7 mb-6 md:text-2xl md:px-4 '>We are exited to welcome you to our gallery and see how our collections influence you.</p>
              </article>

            </div>
          </div>
          
        </section>
        
    </main>
  )
}

export default Cta 