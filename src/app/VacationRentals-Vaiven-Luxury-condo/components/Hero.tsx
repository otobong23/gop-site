"use client";
import Image from "next/image"
import Link from "next/link";
import SaveBtnText from "@/components/Buttons/SaveBtnText"
import ShareBtnText from "@/components/Buttons/ShareBtnText"
import ImageViewSlider from "./ImageViewSlider";
import bedRoomImg from '@/assets/rental-images/room-two-beds.webp'
import gridIcon from '@/assets/icons/grid.svg'
import { imagesView } from "../constants/images.constant";
import { layoutSize } from "@/constants/style.constant";



const IMG_VIEW = () => (
   <div className="hidden md:grid relative w-full max-w-[inherit] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl lg:rounded-2xl">
      <div className="large row-span-2 col-span-2 w-full h-full">
         <Link href='' className="block h-full">
            <Image src={bedRoomImg} alt="bed room" className="w-full object-cover h-[inherit]" />
         </Link>
      </div>
      {
         imagesView.map(({ img, alt, path }, index) => (
            <div key={alt + index} className="w-full">
               <Link href={path} className="blocks">
                  <Image src={img} alt={alt} className="w-full h-full object-cover" />
               </Link>
            </div>
         ))
      }
      <div className="absolute bottom-[7%] right-5">
         <button className="py-[7px] px-[15px] border border-[rgb(34,34,34)] rounded-lg bg-white flex">
            <Image src={gridIcon} alt="grid icon" />
            <span className="pl-2">Show all photos</span>
         </button>
      </div>
   </div>
);

export default function Hero() {
   const handleShare = () => { console.log('shared') }
   const handleSave = () => { console.log('save') }
   return (
      <section className="display-section flex flex-col-reverse md:flex-col">
         <div className={layoutSize+'flex pt-6 items-center justify-between'}>
            <h1 className='text-[26px] font-semibold leading-[30px]'>Playacar -Vaivèn Luxury condo  (2 beds)</h1>
            <div className='hidden md:flex items-center'>
               <ShareBtnText onClick={handleShare} />
               <SaveBtnText HandleOnClick={handleSave} />
            </div>
         </div>
         <div className={layoutSize+"image-grid md:pt-6"}>
            <IMG_VIEW />
         </div>
         <div className="md:hidden">
               <ImageViewSlider />
            </div>
      </section>
   )
}
