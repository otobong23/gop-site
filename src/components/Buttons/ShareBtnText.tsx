import Image from 'next/image'
import share from '@/assets/icons/upload.svg'
import type { ShareBtnTextType } from '@/types/buttons.types'


export default function ShareBtnText({onClick}:ShareBtnTextType) {
   return (
      <button className='flex gap-2 items-center p-2' onClick={onClick}>
         <Image src={share} alt='share-button' width={16} />
         <span className='underline'>Share</span>
      </button>
   )
}
