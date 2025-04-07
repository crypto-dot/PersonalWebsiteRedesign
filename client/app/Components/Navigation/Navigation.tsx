'use client'
import React, {ReactElement,  Dispatch, SetStateAction} from 'react'
import { BioRhyme } from "next/font/google";
import NavButton from './NavButton';
import classNames from 'classnames';
import NavLinks from './NavLinks';
import Socials from './Socials';

const bioRhyme = BioRhyme({ weight: ["800"], subsets: ["latin"] });
interface NavigationProperties{
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  navOpen: boolean;
}
const Navigation: React.FC<NavigationProperties> = ( { setNavOpen, navOpen } ) => {


  const ulClass : string = classNames({
    [`grid grid-cols-1 ${bioRhyme.className} text-[primary] absolute w `]: true,
    'hidden': !navOpen,
  });
  const navClass = classNames({
    'flex justify-between w-full sticky h-0 flex-col top-0 px-10': true,
  });
  const navGlassPane = classNames({
    'backdrop-blur bg-white/5 -z-10 w-full h-screen absolute top-0 left-0': true,
    'hidden': !navOpen,});
  const iconClass = classNames({
    'relative top-[-24px] backdrop-blur bg-white/5': true,
    'hidden': navOpen,
  })
  return (
    <nav className={navClass}>

      <div className='relative p-4 flex md:justify-around md:border-2 md:border-slate-700 md:m-4 rounded-[20px]'>
      Carlos
      {/* <NavLinks navClass={"hidden md:flex gap-5"}/> */}
        <NavButton setNavOpen={setNavOpen}/>
        {/* <NavLinks navClass={ulClass}/> */}
        <Socials/>
      </div>
      <div className={navGlassPane}>
    
      </div>
    </nav>
  );
};

export default Navigation