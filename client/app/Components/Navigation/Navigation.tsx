'use client'
import React from 'react'
import { BioRhyme } from "next/font/google";
import NavButton from './NavButton';

const bioRhyme = BioRhyme({ weight: ["800"], subsets: ["latin"] });

function Navigation() {
  return (
    <div className='flex justify-between w-full flex-col'>
      <NavButton/>
      <nav>
        <ul className={`grid grid-cols-1 ${bioRhyme.className} text-primary`}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation