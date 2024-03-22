import React, { useState, useRef, ReactElement} from 'react'
import Lottie from 'lottie-react';
import animationData from "../../../public/LottieAssets/HamburgerMenu/menu.json";
import MenuIcon  from "../../../public/LottieAssets/HamburgerMenu/menu.svg";
function NavButton(): ReactElement {
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
    const lottieRef = useRef() as React.MutableRefObject<typeof Lottie>;

    const handleLottieLoad = (): void => {
        setLoaded(true);
        lottieRef.current?.pause();
    }
    return (
        <button className='h-fit' onClick={handleButtonClick} aria-label={"Open or close the mobile navigation menu"} aria-expanded={isOpen}>
            <MenuIcon className='block__hamburger'/>
            <Lottie className='block__hamburger h-10' lottieRef={lottieRef} loop={false} autoPlay={false} onDOMLoaded={handleLottieLoad} animationData={animationData} />
        </button>
    )
}

export default NavButton