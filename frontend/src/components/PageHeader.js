import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const PageHeader = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">←</Link></li>
      </ul>
    </nav>
  )
}

export default PageHeader