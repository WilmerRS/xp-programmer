import SecondaryButton from '../button/SecondaryButton'
import Brand from './Brand'
import NavLabel from './NavLabel'

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto py-6 flex justify-between px-3 items-center">
      <Brand />
      <nav className="flex gap-4">
        <NavLabel label={'Inicio'} to={'/'} />
        <NavLabel label={'Backlog'} to={'/backlog/1'} />
      </nav>
      <div>
        <SecondaryButton>
          Iniciar sesión
        </SecondaryButton>
      </div>
    </header>
  )
}

export default Header
