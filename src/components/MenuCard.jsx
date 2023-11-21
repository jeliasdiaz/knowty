import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { titleContext } from "../context/TitleContextSubject";

export const MenuCard = ({ url, img, title, imgSize, delay }) => {
  const { onTitleSubject } = useContext(titleContext);

  const handleClick = () => {
    onTitleSubject(title);
  };

  // Transition page
  const navigate = useNavigate();
  const transitionPage = (ev) => {
    ev.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(url);
      });
    } else {
      navigate(url);
    }
  };
  return (
    <Link
      to={url}
      className="link-secondary text-decoration-none text-dark"
      onClick={handleClick}
    >
      <div
        className="subjectLinkMenu ownShadow"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay={delay}
        onClick={transitionPage}
      >
        <div className="subjectLinkMenuContent">
          <img
            src={`/img/${img}`}
            alt="subject img"
            className={`${imgSize ? imgSize : "w-25"} pe-2`}
            loading="lazy"
          />
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

MenuCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSize: PropTypes.string,
};
