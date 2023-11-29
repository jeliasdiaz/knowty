import PropTypes from "prop-types";

export const MembersCard = ({
  name,
  description,
  icon,
  iconTwo,
  optionalClass,
  delay,
  optionalLink,
}) => {
  return (
    <div
      className={`teamCard ${optionalClass}`}
      data-aos="fade-right"
      data-aos-duration="400"
      data-aos-delay={delay}
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
  delay: PropTypes.number,
};
