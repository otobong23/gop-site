import Image from "next/image"
import heart from '@/assets/icons/heart.svg'
import { SaveBtnTextType } from "@/types/buttons.types"

export default function SaveBtnText({ HandleOnClick }: SaveBtnTextType) {
   return (
      <button className='flex gap-2 items-center p-2' onClick={HandleOnClick}>
         <Image src={heart} alt='share-button' width={16} />
         <span className="underline">Save</span>
      </button>
   )
}
