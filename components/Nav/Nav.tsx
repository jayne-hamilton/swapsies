import Link from 'next/link'


function Nav() {
  return (
    <nav>
      <h3 className="logo">
        SWAPSIES 
      </h3>
      <div>
      <ul className="nav-links">
        <li>
          <Link href="/listings">LISTINGS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav
