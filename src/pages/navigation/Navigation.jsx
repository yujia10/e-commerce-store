import {Outlet, Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './navigation.scss'

function Navigation() {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
              shop
          </Link>
          <Link className='nav-link' to='/auth'>
              SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
