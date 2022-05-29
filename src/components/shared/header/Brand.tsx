import Image from 'next/image'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link href={''}>
      <div className="flex gap-3 items-center hover:scale-105 transition-all transform mx-4 cursor-pointer">
        <Image src={'/brand.png'} width={40} height={40} />
        <span className="font-black text-black-500 select-none">
          XP PROGRAMMER
        </span>
      </div>
    </Link>
  )
}

export default Brand
