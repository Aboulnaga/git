import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="nav-header">
      <div className="logo">
        <h1>
          <Link href={"/"}>Logo</Link>
        </h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/users"}>Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
