import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        Navbar

        <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/portfolio">portfolio</Link>
            <Link href="/about/users">Users</Link>
        </div>
    </div>
  )
}

export default Navbar