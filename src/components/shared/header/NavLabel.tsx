import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLabel = ({ label, to }: { label: string; to: string }) => {
  const router = useRouter()

  const isActiveStyles = (isActive: boolean) => {
    if (isActive) {
      return 'font-semibold text-black-500 hover:text-black-600'
    }

    return 'text-black-200 hover:text-black-400'
  }

  return (
    <Link href={to}>
      <a
        className={`px-4 py-3 select-none  transition-all ${isActiveStyles(
          router.pathname === to
        )}`}
      >
        {label}
      </a>
    </Link>
  )
}

export default NavLabel
