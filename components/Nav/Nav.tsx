import Link from 'next/link'


function Nav() {
  return (
    <nav>
      <h3 className="logo">
        SWAPSIES test
      </h3>
      <ul className="nav-links">
        <li>
          <Link href="/listings">LISTINGS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
