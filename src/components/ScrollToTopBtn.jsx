import { useEffect, useState } from "react"
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopBtn = () => {
    const [scrolled, setScrolled] = useState(false)

    const goTop = () => {
        window.scrollTo(0, 0)
    }

    const handleScroll = () => {
        const scroll = window.scrollY;
        if (scroll > 300) {
            setScrolled(true);
        } else if (scroll === 0) {
            setTimeout(() => {
                setScrolled(false);
            }, 2000);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));
    }, []);
    
  return (
    <>
        {
            scrolled && <div onClick={goTop} className="scrollToTopBtn" data-aos="fade-up" data-aos-duration="600"><IoIosArrowUp size={28} /></div>
        }
    </>
  )
}

export default ScrollToTopBtn