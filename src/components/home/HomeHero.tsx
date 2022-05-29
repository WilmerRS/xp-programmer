import Image from 'next/image'

const HomeHero = () => {
  return (
    <picture className='object-cover'>
      <Image src="/hero.png" width={600} height={550}/>
    </picture>
  )
}

export default HomeHero
