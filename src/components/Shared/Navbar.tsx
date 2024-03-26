import { layoutSize } from "@/constants/style.constant"
import Link from "next/link"

const links = [
  {
    path: '/',
    title: 'Photos'
  },
  {
    path: '/',
    title: 'Amenities'
  },
  {
    path: '/',
    title: 'Reviews'
  },
  {
    path: '/',
    title: 'Location'
  }
]


export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 border-t border-[rgba(34,34,34,.15)]">
      <div className={layoutSize}>
        <div className="py-[30px] flex gap-6">
          {
            links.map(({path, title}, index) => (
              <Link href={path} key={title+index}>{title}</Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
