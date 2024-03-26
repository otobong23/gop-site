import Image from "next/image"
import ChevronRight from '@/assets/icons/chevronRight.svg'
import { SeeMoreTextType } from "@/types/buttons.types"

export default function SeeMoreText({ HandleOnClick, value }: SeeMoreTextType) {
   return (
      <button className='flex gap-1 items-center' onClick={HandleOnClick}>
         <span className="underline">{value ? 'See less' : 'See More'}</span>
         <Image src={ChevronRight} alt='share-button' width={12} />
      </button>
   )
}
