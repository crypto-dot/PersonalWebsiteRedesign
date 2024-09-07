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
    [`grid grid-cols-1 ${bioRhyme.className} text-[primary] absolute w `]: true,
    'hidden': !navOpen,
  });
  const navClass = classNames({
    'flex justify-between w-full sticky h-0 flex-col top-0 px-10': true,
  });
  const navGlassPane = classNames({
    'backdrop-blur bg-white/5 -z-10 w-full h-screen absolute top-0 left-0': true,
    'hidden': !navOpen,});
  return (
    <nav className={navClass}>
      <div className='relative pt-4'>
        <NavButton setNavOpen={setNavOpen}/>
          <ul className={ulClass}>
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
      </div>
      <div className={navGlassPane}>

      </div>
    </nav>
  );
};

export default Navigation