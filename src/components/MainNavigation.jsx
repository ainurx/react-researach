import { Link } from 'react-router-dom'

// Common
import Constants from '../common/Constants'

function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Constants.Url.Main}>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation