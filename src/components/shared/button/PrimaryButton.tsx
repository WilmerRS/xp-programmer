import { ReactNode } from 'react'
import Button from './Button'

const PrimaryButton = ({
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
      className={' rounded-lg font-semibold bg-gradient-to-r text-white from-primary-400 to-primary-500 active:to-primary-600 hover:-translate-y-1 transform duration-200 transition-all'}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
