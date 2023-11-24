import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import PropTypes from "prop-types";

export const NavIcon = ({ path, icon, tooltipContent, tooltipId }) => {
  const navigate = useNavigate();
  const transitionPage = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };
  return (
    <>
      <span id={tooltipId} data-tooltip-content={tooltipContent}>
        <NavLink to={path} onClick={transitionPage}>
          {" "}
          {icon}
        </NavLink>
      </span>
      <ReactTooltip
        anchorId={tooltipId}
        style={{ backgroundColor: "#337ab7", color: "#fff", padding: "5px" }}
        delayShow={300}
      />
    </>
  );
};

NavIcon.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  tooltipContent: PropTypes.string.isRequired,
  tooltipId: PropTypes.string.isRequired,
};
