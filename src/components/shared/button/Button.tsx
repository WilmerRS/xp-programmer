import { ReactNode } from 'react'

const Button = ({
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
  const isActiveStyles = !isActive ? 'bg-red-100' : ''
  return (
    <button
      {...rest}
      disabled={!isActive}
      className={`select-none px-6 py-2 rounded-lg transition ${className} disabled:${isActiveStyles}`}
    >
      {children}
    </button>
  )
}

export default Button
