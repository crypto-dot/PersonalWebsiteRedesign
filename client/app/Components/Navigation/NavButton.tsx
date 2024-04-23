import React, { useState, useRef, ReactElement, forwardRef, ForwardedRef,ForwardRefExoticComponent, FC, RefAttributes,  RefObject} from 'react'
import Lottie, {LottieRef} from 'lottie-react';
import animationData from "../../../public/LottieAssets/HamburgerMenu/menu.json";
import MenuIcon  from "../../../public/LottieAssets/HamburgerMenu/menu.svg";
interface NavButtonProperties{
    (ref: RefObject<HTMLElement>): ReactElement
  }
const NavButton= React.forwardRef<NavButtonProperties>( (props, ref: RefObject<HTMLElement>): ReactElement => {
    const [isOpen, setOpen] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    MenuIcon as any;
    const handleButtonClick = (): void => {
        setOpen(!isOpen);
        if (isOpen) {
            // reverse animation
            lottieRef.current?.setDirection(-1);
        }
        else {
            // set animation forward
            lottieRef.current?.setDirection(1);
        }
        lottieRef.current?.play();
    };
    const lottieRef = useRef() as LottieRef;

    const handleLottieLoad = (): void => {
        setLoaded(true);
        lottieRef.current?.pause();
        if(ref) {
            ref.current.classList.toggle('nav-open', isOpen);
        }

    }
    return (
        <button className='h-fit w-fit sticky right-0 left-full' onClick={handleButtonClick} aria-label={"Open or close the mobile navigation menu"} aria-expanded={isOpen}>
            {
                !isLoaded &&             
                <MenuIcon className='block__hamburger'/>
            }
            <Lottie className='block__hamburger h-fit w-fit' lottieRef={lottieRef} loop={false} autoPlay={false} onDOMLoaded={handleLottieLoad} animationData={animationData} />
        </button>
    )
});

export default NavButton