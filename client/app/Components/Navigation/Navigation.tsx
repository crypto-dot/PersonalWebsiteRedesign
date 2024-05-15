'use client'
import React, {ReactElement} from 'react'
import { BioRhyme } from "next/font/google";
import NavButton from './NavButton';
import classNames from 'classnames';

const bioRhyme = BioRhyme({ weight: ["800"], subsets: ["latin"] });
interface NavigationProperties{
    (setNavOpen: (bool: boolean) => void, navOpen: boolean): ReactElement;
}
const Navigation: NavigationProperties = ( { setNavOpen, navOpen } ): ReactElement => {


  const ulClass = classNames({
    [`grid grid-cols-1 ${bioRhyme.className} text-[primary] absolute w`]: true,
    'hidden': !navOpen,
  });
  const navClass = classNames({
    ["before:content-[''] before:block before:absolute before:top-0 before:right-0 before:w-full before:h-4"]: true,
    'flex justify-between w-full flex-col sticky top-4 mt-4 px-4': true,
    'backdrop-blur bg-white/5 h-screen': navOpen,
    'before:backdrop-blur before:bg-white/5': navOpen
  });
  return (
    <nav className={navClass}>
      <div className='relative'>
        <NavButton setNavOpen={setNavOpen}/>
          <ul className={ulClass}>
            <li className='relative'>
              <a href="/about">About</a>
            </li>
            <li className='relative'>
              <a href="/projects">Projects</a>
            </li>
            <li className='relative'>
              <a href="/blog">Blog</a>
            </li>
            <li className='relative'>
              <a href="/contact">Contact</a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navigation