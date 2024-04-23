'use client'
import React, { ForwardedRef, ReactElement, MutableRefObject, forwardRef} from 'react'
import { BioRhyme } from "next/font/google";
import NavButton from './NavButton';

const bioRhyme = BioRhyme({ weight: ["800"], subsets: ["latin"] });
interface NavigationProperties{
  prop: null,
  ref: MutableRefObject<HTMLElement>
}
const Navigation = forwardRef<NavigationProperties>( (props,  ref): ReactElement => {
  return (
    <div className='flex justify-between w-full flex-col sticky top-0 pt-4'>
      <div className='relative'>
        <NavButton ref={ref}/>
        <nav>
          <ul className={`grid grid-cols-1 ${bioRhyme.className} text-[primary]`}>
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
        </nav>
      </div>
    </div>
  );
});

export default Navigation