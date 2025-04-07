import React from 'react'

interface NavLinkProperties {
    navClass: object;
}
const NavLinks : React.FC<NavLinkProperties> = ({navClass}) => {
  return (
    <ul className={navClass}>
    <li className='relative pb-5'>
      <a href="/about">About</a>
    </li>
    <li className='relative pb-5'>
      <a href="/projects">Projects</a>
    </li>
    <li className='relative pb-5'>
      <a href="/blog">Blog</a>
    </li>
    <li className='relative pb-5'>
      <a href="/contact">Contact</a>
    </li>
  </ul>
  )
}

export default NavLinks