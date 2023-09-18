import PropTypes from "prop-types";
import "./california-mission.css";
const CaliforniaMission = ({ name, missionImage, url }) => (
  <div className="mission-card">
    <img src={missionImage} alt={name} className="mission-image" />
    <h3>{name}</h3>
    <button className="learn-more" onClick={() => window.open(url, "_blank")}>
      Learn More
    </button>
  </div>
);

CaliforniaMission.propTypes = {
  name: PropTypes.string.isRequired,
  missionImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CaliforniaMission;
