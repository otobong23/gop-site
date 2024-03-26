"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { details, feature } from '../constants/feature.constant'
import starImg from "@/assets/icons/star.svg"
import jamesImg from '@/assets/james-img.jpg'
import secureIcon from '@/assets/icons/secure.svg'
import starIcon from '@/assets/icons/star.svg'
import SeeMoreText from '@/components/Buttons/SeeMoreText'
import useToggle from '@/hooks/useToggle';



const FeaturedElement = () => feature.map(({ img, title, text }, index) => (
  <div className='flex gap-6' key={title + index}>
    <div className="col relative max-w-10 min-w-10 flex justify-center items-start overflow-hidden">
      {index === 0 ? <Image src={img} alt='image' className='w-10 object-cover' /> : <Image src={img} alt='image' className='w-6 object-cover' />}
    </div>
    <div className="col">
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-sm text-[#717171]">{text}</p>
    </div>
  </div>
))

const Card = () => (
  <div className="card py-8 px-6 rounded-3xl bg-white shadow-customShadow flex gap-6 items-center w-full">
    <div className="col flex flex-col gap-2 flex-[2] items-center">
      <div className="card-img relative">
        <div className='img w-[104px] h-[104px] overflow-hidden rounded-full'>
          <Image src={jamesImg} alt='james image' className='w-full h-full object-cover' priority={true} />
        </div>
        <span className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#D90865] absolute bottom-1 -right-1'>
          <Image src={secureIcon} alt='secure icon' className='w-4 h-4' color='#fff' />
        </span>
      </div>
      <div className="card-header flex flex-col items-center">
        <h1 className="card-heading text-[32px] font-semibold leading-8">James</h1>
        <p className="title text-sm">Host</p>
      </div>
    </div>
    <div className="col flex flex-col gap-3 flex-1">
      <div className='flex flex-col gap-[2px]'>
        <span className='text-[22px] font-semibold'>
          84
        </span>
        <span className='text-sm'>Reviews</span>
      </div>
      <hr className='bg-[rgba(34,34,34,0.5)] h-[.5px]' />

      <div className='flex flex-col gap-[2px]'>
        <span className='text-[22px] font-semibold flex gap-1'>
          4.92<Image src={starIcon} alt='star icon' className='w-4' />
        </span>
        <span className='text-sm'>Rating</span>
      </div>
      <hr className='bg-[rgba(34,34,34,0.5)] h-[.5px]' />

      <div className='flex flex-col gap-[2px]'>
        <span className='text-[22px] font-semibold'>
          7
        </span>
        <span className='text-sm'>Years Hosting</span>
      </div>
    </div>
  </div>
)

const DetailFeatures = () => details.map(({ img, text }, index) => (
  <div className='flex gap-3' key={text + index}>
    <div className="col relative">
      <Image src={img} alt='image' className='w-6 object-cover' />
    </div>
    <div className="col">
      <p className="text-base font-normal">{text}</p>
    </div>
  </div>
))

export default function MainContent() {
  const [A_Toggle, setA_Toggle] = useToggle(false)
  return (
    <div className='flex flex-col md:flex-row text-[#222] font-medium'>
      <div className='flex-[1.5]'>
        <div className="py-8 border-t border-[rgba(34,34,34,.15)]">
          <h1 className='text-base md:text-[22px] font-semibold'>Room in Playa del Carmen, Mexico</h1>
          <div className='flex items-center gap-[9.5px]'>
            <span>2 beds</span>
            <span className='block w-[1.5px] h-[1.5px] bg-[#222]'></span>
            <span>Dedicated bathroom</span>
          </div>
          <div className='flex gap-1 md:mt-2'>
            <Image src={starImg} alt='star icon' className='w-4' />
            <p>No Reviews Yet</p>
          </div>
        </div>

        <div className="py-8 border-t border-[rgba(34,34,34,.15)] flex gap-6 items-center">
          <div className="col relative w-10 h-10 overflow-hidden rounded-full">
            <Image src={jamesImg} alt='james image' className='w-full h-full object-cover' priority />
          </div>
          <div className="col">
            <h2 className="text-base font-semibold">Stay With James</h2>
            <p className="text-sm text-[#717171]">7 Years Hosting</p>
          </div>
        </div>

        <div className='py-8 border-t border-[rgba(34,34,34,.15)] flex flex-col gap-6'>
          <FeaturedElement />
        </div>

        <section className='py-8 border-t border-[rgba(34,34,34,.15)]'>
          <h1 className='text-base md:text-[22px] font-semibold mb-6'>Meet Your Host</h1>
          <div className=' pt-10 pb-6 px-6 w-full flex justify-center bg-[#f0efe9] rounded-2xl'>
            <div className="w-full max-w-[380px] flex flex-col gap-8">
              <div>
                <Link href='/' children={<Card />} className='w-full block' />
              </div>

              <div className='flex flex-col gap-4'>
                <DetailFeatures />
              </div>

              <div>
                <p className='text-base font-normal leading-6'>
                  Hello… Olá… Hola…
                  I am James, an avid traveler.
                  A bit about…
                  I am a Medical Development Executive and a blessed father of 2 beautiful, kind, intelligent, strong & smart girls.
                  'Every Stranger - is - Your Teacher'
                  ciao
                </p>
                {/* possible button */}
              </div>
              <div>
                <button className='py-[14px] px-6 font-semibold text-white text-base rounded-lg bg-[rgb(34,34,34)]'>Message Host</button>
              </div>
              <div className='pt-8 border-t border-[rgba(34,34,34,.15)] flex gap-3 items-center'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-xs font-normal">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='py-12'>
          <h1 className='text-base md:text-[22px] font-semibold mb-6'>About This Place</h1>
          <div>
            <p className={'text-ellipsis leading-8 text-base font-normal ' + (A_Toggle ? 'line-clamp-none' : ' line-clamp-6')}>
              Vaivèn is a property located in Playacar - <br />
              Private Resort Beach &amp; Golf community. <br /><br />
              👉 Our stylish &amp; comfortable home is an upscale fully furnished unit, with central AC &amp; ceiling fans.<br /><br />
              The 3 bedroom &amp; 3 bathroom unit, includes 2 bedroom/bathroom suites.<br /><br />
              The home common areas include: living room, dining area, kitchen, providing  2 separate dining areas, including an exterior patio dining with ceiling fan.<br /><br />
              <span>The space</span><br />
              Playacar -Vaivèn Luxury Property<br />
              (common &amp; community areas per photos)<br /><br />
              Vaivèn -upscale furnished unit:<br />
              👉1 private bedroom &amp; bathroom (2 beds)  <br />
              *shared home &amp; amenities<br /><br />
              Common areas:<br />
              • Kitchen <br />
              • living room <br />
              • laundry in unit <br />
              • outdoor terrace patio with seating <br />
              • 4 pools (1 heated) <br />• gymnasium <br />
              • game area <br />
              • outdoor sitting dining area <br />
              • Co-Work business center <br />
              • visitor parking space <br />
              (not reserved) <br /><br />
              Available Upon request: <br />
              • 2024 quad 250 - 1,200 pesos day <br />
              • 2024 quad 180 - 850 pesos day <br />
              back and relax in this calm, stylish space.<br /><br />
              <span>Guest access</span><br />
              Playacar private community access granted.<br /><br />
              <span>During your stay</span><br />As desired by guests. <br /><br />
              This expat community consists of many national &amp; international visiting guests.<br />
              The peaceful property provides a welcoming staff, with: multiple pools (1 heated), fitness area, coworking space, pool table, ping pong table, kids jungle gym, private underground garage parking.<br /><br />
              <span>Other things to note</span><br />
              💡 Electricity: <br />
              • consumption is included<br /><br />
              NOTE: <br />
              Laundry Room use of Washer / Dryer is charged additional at $85 pesos per load.<br /><br />
              Added Services Upon Request:<br /><br />
              ✅ private airport transports<br />
              - group: 3,000 pesos (max 4)<br />
              - single: 1,000 pesos (per)<br /><br />
              ✅ home cleanings<br />
              - 1,700 pesos day (4 hrs) <br />
              - ⁠10,000 pesos week (1x day)<br /><br />
              ✅ bicycle rental (child seats)<br />
              - 400 pesos day<br />
              -2,400 pesos week <br /><br />
              ✅ quad rentals <br />
              2024 250: <br />
              - 1,200 pesos day <br />
              -7,200 pesos week<br /><br />
              2024 180 (automatic): <br />
              - 950 pesos day <br />
              -5,500 pesos week
            </p>
            <div className='pt-4'>
              <SeeMoreText HandleOnClick={setA_Toggle} value={A_Toggle} />
            </div>
          </div>
        </div>

        <div className='py-12 border-t border-[rgba(34,34,34,.15)] what-this-place-offers'>
          <h1 className='text-base md:text-[22px] font-semibold mb-6'>What this place offers</h1>
          <div className='flex flex-col md:flex-row'>
            <div className="col flex-1">
              <div className='item flex items-center gap-4 pb-4'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-base font-normal">Lock on bedroom door</p>
                </div>
              </div>

              <div className='item flex items-center gap-4 pb-4'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-base font-normal">Kitchen</p>
                </div>
              </div>

              <div className='item flex items-center gap-4 pb-4'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-base font-normal">Security Cameria on Property</p>
                </div>
              </div>
            </div>
            <div className="col flex-1">
              <div className='item flex items-center gap-4 pb-4'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-base font-normal">Beach Access</p>
                </div>
              </div>

              <div className='item flex items-center gap-4 pb-4'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-base font-normal">Wifi</p>
                </div>
              </div>

              <div className='item flex items-center gap-4 pb-4'>
                <div className="col relative">
                  <Image src={starIcon} alt='image' className='w-6 object-cover' />
                </div>
                <div className="col">
                  <p className="text-base font-normal line-through">Carbon Monoxide Alarm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-12 border-t border-[rgba(34,34,34,.15)]'></div>

      </div>


      <div className='flex-1'>
        <div className='sticky top-0 py-8 pl-[16.666%] hidden md:block'>
          <div className='p-6 border-2 border-[rgb(221,221,221)] shadow-customShadow rounded-xl'>
            <h1 className='text-base md:text-[22px] font-normal mb-6'>Add Date After Price</h1>
            <div className='main-container border border-[rgb(221,221,221)] rounded-lg mb-4'>
              <button className='row flex w-full text-start'>
                <div className="flex-1 px-[10px] py-3 border-r-2 border-[rgb(221,221,221)]">
                  <h4 className='text-xs font-medium'>CHECK-IN</h4>
                  <p className='text-sm font-normal text-[#717171]'>Add date</p>
                </div>
                <div className="flex-1 px-[10px] py-3">
                  <h4 className='text-xs font-medium'>CHECKOUT</h4>
                  <p className='text-sm font-normal text-[#717171]'>Add date</p>
                </div>
              </button>

              <div className="row border-t-2 py-3 pl-[10px] border-[rgb(221,221,221)]">
                <div>
                  <h4 className='text-xs font-medium'>GUESTS</h4>
                  <p className='text-sm font-normal'>Add date</p>
                </div>
              </div>
            </div>
            <div>
              <button className='w-full flex items-center justify-center leading-none py-4 text-white text-base rounded-lg bg-[#DB0C64]'>Check availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
