import { Link } from 'react-router-dom'

function navbar() {
  return (
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/cart'>cart</Link>
        <Link to = '/menu'>menu</Link>
        <Link to = '/register'>register</Link>
        <Link to = '/login'>login</Link>
      </nav>
  )
}

export default navbar
