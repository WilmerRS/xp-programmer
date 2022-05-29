import { ReactNode } from 'react'

const GradientText = ({ children }: {children: ReactNode}) => {
  return (
    <span
      className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 '
    >
      {children}
      </span>
  )
}

export default GradientText
