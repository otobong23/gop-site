import React from 'react'
import { footerConstant } from '@/constants/footer.constant'
import Link from 'next/link'
import webImg from '@/assets/icons/web.svg'
import Image from 'next/image'
import facebook from '@/assets/icons/facebook.svg'
import twitter from '@/assets/icons/twitter.svg'
import instagram from '@/assets/icons/instagram.svg'
import privacy from '@/assets/icons/privacy.svg'
import { layoutSize } from '@/constants/style.constant'

export default function Footer() {
  return (
    <section className={layoutSize}>
      <div className="flex flex-col lg:flex-row border-b border-[rgba(34,34,34,.15)]">
        {
          footerConstant.map((item, index) => (
            <div className="col lg:flex-1 py-6 lg:py-12 border-b lg:border-0 border-[rgba(34,34,34,.15)]" key={item.title + index}>
              <h1 className='text-[#222] mb-3 text-sm font-medium'>{item.title}</h1>
              <ul className='flex flex-col gap-3'>
                {
                  item.links.map((link, index) => (
                    <li key={link.title + index}>
                      <Link href={link.path} className='text-sm text-[rgb(34,34,34)]'>{link.title}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <div className="row flex flex-col-reverse lg:flex-row justify-between py-6">
        <div className="col py-1">
          <div className='copyright text-[#222] text-sm flex flex-col lg:flex-row gap-[9.5px] items-start md:items-center'>
            <span>© 2024 Airbnb, Inc.</span>
            <span className='hidden lg:block w-[1.5px] h-[1.5px] bg-[#222]'></span>
            <div className='flex flex-col md:flex-row gap-[9.5px]'>
              <div className='flex items-center gap-[9.5px]'>
                <Link href='/' className='hover:underline'>Terms</Link>
                <span className='block w-[1.5px] h-[1.5px] bg-[#222]'></span>
                <Link href='/' className='hover:underline'>Sitemap</Link>
                <span className='block w-[1.5px] h-[1.5px] bg-[#222]'></span>
                <Link href='/' className='hover:underline'>Privacy</Link>
                <span className='block w-[1.5px] h-[1.5px] bg-[#222]'></span>
              </div>
              <Link href='/' className='flex items-center hover:underline'>Your Privacy Chioces &nbsp; <span><Image src={privacy} alt='' /></span></Link>
            </div>
          </div>
        </div>
        <div className="col flex text-[#222] text-sm pb-6 lg:pb-0 md:justify-center">
          <Link href='/' className='flex items-center group-hover:line'>
            <Image src={webImg} alt='' width={16} className='mr-[5px]' />
            <span className='hover/line:underline'>English (Us)</span>
          </Link>
          <Link href='/' className='ml-6 hover:underline'><span className='ml-[5px] text-base font-normal'>$</span> USD</Link>
          <div className='hidden md:flex ml-6 gap-4 items-center'>
            <Link href='/' className='hover:underline'>
              <Image src={facebook} alt='facebook' width={18} />
            </Link>
            <Link href='/' className='hover:underline'>
              <Image src={instagram} alt='twitter' width={18} />
            </Link>
            <Link href='/' className='hover:underline'>
              <Image src={twitter} alt='instagram' width={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
