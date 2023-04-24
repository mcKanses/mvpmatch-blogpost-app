import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const PageHeader = () => {
  return (
    <nav id='nav-bar'>
      <ul>
        <li><Link to="/">← back home</Link></li>
      </ul>
    </nav>
  )
}

export default PageHeader