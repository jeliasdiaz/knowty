import { useLayoutEffect, useRef } from "react";
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


    const [progress, setProgress] = useState(0);
    const articleRef = useRef();

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (!articleRef.current) return;

            const { height } = articleRef.current.getBoundingClientRect();

            setProgress(window.scrollY / (height - window.innerHeight));
        };

        updateHeight();

        window.addEventListener("scroll", updateHeight);
        return () => {
            window.removeEventListener("scroll", updateHeight);
        };
    }, []);

    const position = Math.max(1 - progress, 0);
    const notMoved = position === 1;

    const DIAMETER = 50;
    const STROKE_WIDTH = 6;
    const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
    const CIRCUMFERENCE = Math.PI * RADIUS * 2;


    return (
        <>

            {
                scrolled && !notMoved &&

                <div onClick={goTop} className="scrollToTopBtn" data-aos="fade-up" data-aos-duration="600"><IoIosArrowUp size={28} /><svg
                    viewBox="0 0 50 50"
                    width="35px"
                    height="35px"
                    className="circle-progress"
                >
                    <circle
                        cx={DIAMETER / 2}
                        cy={DIAMETER / 2}
                        r={RADIUS}
                        stroke="tomato"
                        fill="transparent"
                        strokeWidth={STROKE_WIDTH}
                        style={{
                            strokeDasharray: CIRCUMFERENCE,
                            strokeDashoffset: CIRCUMFERENCE * position
                        }}
                    />
                </svg></div>

            }
        </>
    )
}

export default ScrollToTopBtn