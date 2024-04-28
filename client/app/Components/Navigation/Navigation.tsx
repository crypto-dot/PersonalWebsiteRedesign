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
    [`grid grid-cols-1 ${bioRhyme.className} text-[primary]`]: true,
    'hidden': !navOpen,
  })
  return (
    <nav className='flex justify-between w-full flex-col sticky top-0 mt-4 backdrop-blur  bg-white/5'>
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