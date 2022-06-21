import Image from 'next/image'
import SecondaryButton from '../../shared/button/SecondaryButton'
import { PersonProps } from './PersonProps'

export const Person = ({
  name,
  username,
  imgUri,
  position,
  personId
}: PersonProps) => {
  return (
    <div className="flex flex-row items-start gap-3 rounded-lg border p-4">
      <div className="flex flex-col justify-center h-full items-center">
        <picture className="object-cover">
          <Image src={imgUri} width={50} height={45} />
        </picture>
      </div>
      <div className="flex flex-col items-start gap-0">
        <span className="font-bold">{name}</span>
        <p>@{username}</p>
        <span className="rounded-lg bg-[#15857E] px-2 py-0 text-sm">
          {position}
        </span>
      </div>
      <SecondaryButton>X</SecondaryButton>
    </div>
  )
}
