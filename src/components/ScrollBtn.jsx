import { memo } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollBtn = memo(({goTop, DIAMETER, RADIUS, STROKE_WIDTH, CIRCUMFERENCE, position}) => {
    return (
        <div onClick={goTop} className="scrollToTopBtn ownShadow-lg" data-aos="fade-up" data-aos-duration="500">
            <IoIosArrowUp size={30} />
            <svg viewBox="0 0 50 50" width="50px" height="50px" className="circleProgress">
                <circle
                    cx={DIAMETER / 2}
                    cy={DIAMETER / 2}
                    r={RADIUS}
                    stroke="#2B7EA1"
                    fill="transparent"
                    strokeWidth={STROKE_WIDTH}
                    style={{
                        strokeDasharray: CIRCUMFERENCE,
                        strokeDashoffset: CIRCUMFERENCE * position
                    }}
                />
            </svg>
        </div>
    )
})
