import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import dynamic from 'next/dynamic'
import { imageSlide } from '../constants/images.constant'
import Image from 'next/image'
import Link from 'next/link'

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
   ssr: false
})

const Slides = () => imageSlide.map(({ img, alt, path }, index) => (
   <div key={alt + index} className='w-full max-h-[250px] h-[250px] overflow-hidden'>
      <Link href={path} className='block h-full'>
         <Image src={img} alt={alt} className='w-full object-cover h-[inherit]' />
      </Link>
   </div>
))

export default function ImageViewSlider() {
   return (
      <OwlCarousel items={1} dots={false} loop={true}>
         <Slides />
      </OwlCarousel>
   )
}
