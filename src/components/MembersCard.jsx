import PropTypes from "prop-types";

export const MembersCard = ({
  name,
  description,
  icon,
  iconTwo,
  optionalClass,
  animationduration,
  optionalLink,
}) => {
  return (
    <div
      className={`teamCard ${optionalClass}`}
      data-aos="fade-right"
      data-aos-duration={animationduration}
    >
      {icon}
      {iconTwo}
      <h6 className="pt-3">
        <a href={optionalLink} rel="noreferrer" target="_blank">
          {name}
        </a>
      </h6>
      <p>{description}</p>
    </div>
  );
};

MembersCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  iconTwo: PropTypes.object,
  optionalClass: PropTypes.string,
  optionalLink: PropTypes.string,
  animationduration: PropTypes.number,
};
