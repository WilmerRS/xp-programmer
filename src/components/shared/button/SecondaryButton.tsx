import { ReactNode } from 'react'
import Button from './Button'

const SecondaryButton = ({
  children,
  isLoading = false,
  isActive = true,
  className = '',
  ...rest
}: {
  children: ReactNode;
  isLoading?: boolean;
  isActive?: boolean;
  className?: string;
}) => {
  return (
    <Button
      {...rest}
      isActive={isActive}
      isLoading={isLoading}
      className={'border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 font-semibold'}
    >
      {children}
    </Button>
  )
}

export default SecondaryButton
