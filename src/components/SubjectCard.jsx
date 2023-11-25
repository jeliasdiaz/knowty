import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { BiChevronRight } from "react-icons/bi";
import { useContext } from "react";
import { titleContext } from "../context/TitleContextSubject";

export const SubjectCard = ({ path, img, title, marginTop, delay }) => {
  const { onTitleSubject } = useContext(titleContext);
  const handleClick = () => {
    onTitleSubject(title);
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div
        className="text-decoration-none text-black d-none d-sm-block"
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-delay={delay}
        data-aos-once="true"
        onClick={handleClick}
      >
        <div
          className={`subjectLink d-flex ownShadow-sm ${marginTop} animation`}
        >
          <img
            src={`/img/${img}Icon.png`}
            alt="Subject img"
            className=" pe-2 animation"
            loading="lazy"
          />
          <h5 className="ms-2 animation">{title}</h5>
          <BiChevronRight size={45} className="BiChevronRight animation" />
        </div>
      </div>

      <div
        className="text-decoration-none text-black d-block d-sm-none"
        onClick={handleClick}
      >
        <div
          className={`subjectLink d-flex ownShadow ${marginTop} animation`}
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay={delay}
          data-aos-once="true"
        >
          <img
            src={`/img/${img}Icon.png`}
            alt="Subject img"
            className="w-25 pe-2 animation"
            loading="lazy"
          />
          <h5 className="ms-2 animation">{title}</h5>
          <BiChevronRight size={45} className="BiChevronRight animation" />
        </div>
      </div>
    </>
  );
};

SubjectCard.propTypes = {
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  delay: PropTypes.number,
};
