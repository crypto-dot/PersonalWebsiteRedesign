import React, { useState, useRef, ReactElement, FC, SVGProps} from 'react'
import Lottie, {LottieRef} from 'lottie-react';
import animationData from "../../../public/LottieAssets/HamburgerMenu/menu.json";
import MenuIcon  from "../../../public/LottieAssets/HamburgerMenu/menu.svg";
interface NavButtonProperties{
    (setNavOpen: (bool: boolean) => void) : ReactElement;
}
const NavButton : NavButtonProperties = ({setNavOpen}): ReactElement => {
    const [isOpen, setOpen] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    MenuIcon as FC<SVGProps<SVGElement>>;
    const handleButtonClick = (): void => {
        setOpen(!isOpen);
        setNavOpen(!isOpen);
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
    }
    return (
        <button className='h-fit w-fit sticky right-0 left-full backdrop-blur bg-white/5' onClick={handleButtonClick} aria-label={"Open or close the mobile navigation menu"} aria-expanded={isOpen}>
            {
                !isLoaded &&             
                <MenuIcon className='block__hamburger'/>
            }
            <Lottie className='block__hamburger h-fit w-fit' lottieRef={lottieRef} loop={false} autoPlay={false} onDOMLoaded={handleLottieLoad} animationData={animationData} />
        </button>
    )
};

export default NavButton