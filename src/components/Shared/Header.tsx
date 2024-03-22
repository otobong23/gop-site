"use client"
import Image from "next/image"
import logo from '@/assets/logo-black.png'
import toggleBtn from '@/assets/icons/bar.svg'
import profileImg from '@/assets/icons/user.svg'
import Link from "next/link"
import useToggle from "@/hooks/useToggle"
import { layoutSize } from "@/constants/style.constant"

const transformOrigin = 720

const selectionItem = "px-3 py-[6px] cursor-pointer hover:bg-[#f7f7f7] text-[#222] hover:text-[#252525] font-light hover:font-medium transition-all duration-300 block"

export default function Header() {
  const [selectionToggle, setSelectionToggle] = useToggle(false)
  const display = selectionToggle ? 'block' : 'none'
  return (
    <div className={layoutSize+'flex justify-between items-center relative z-10'}>
      <div className="logo">
        <Link href={'/'} className="h-20 relative w-full flex items-center">
          <Image src={logo} alt="logo" className="object-cover w-full max-w-[118px]" />
        </Link>
      </div>
      <div className="profile flex items-center">
        <div className="profile-col flex justify-between relative px-2 py-2 pl-[14px] w-[86px] rounded-[30px] hover:shadow-md focus:shadow-md shadow-[rgba(0,0,0,.18)] border border-[rgb(221, 221, 221)] transition-all duration-300" title="Main Navigation Menu">
          <button onClick={setSelectionToggle} onBlur={setSelectionToggle}>
            <Image src={toggleBtn} alt="toggleBtn " className="object-cover" width={16} />
          </button>
          <div className="profile-img">
            <Image src={profileImg} alt="profile Image" className="object-cover" width={32} />
          </div>
          <div className="selection py-2 bg-white rounded-xl shadow-customShadow min-w-60 absolute top-full right-0 translate-y-3" style={{
            display: display
          }} onBlur={setSelectionToggle}>
            <ul>
              <li className={selectionItem}><Link href='/auth/signup' className="text-base block">sign up</Link></li>
              <li className={selectionItem}><Link href='/auth/login' className="text-base block">Login</Link></li>
              <hr className="h-[1px] bg-[#ddd] my-2" />
              <li className={selectionItem}><Link href='/gift-cards' className="text-base block">Gift Cards</Link></li>
              <li className={selectionItem}><Link href='/auth/signup' className="text-base block">sign up</Link></li>
              <li className={selectionItem}><Link href='/help-center' className="text-base block">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
