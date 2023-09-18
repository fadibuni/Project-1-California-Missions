import "./App.css";
import missions from "./assets/missions/missions";
import CaliforniaMission from "./assets/components/california-mission/california-mission";
const App = () => {
  return (
    <>
      <div className="header">
        <img
          alt="First California mission"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Mission_San_Diego_de_Alcal%C3%A1_-_church.jpg/1280px-Mission_San_Diego_de_Alcal%C3%A1_-_church.jpg"
        />
        <h1>California Missions</h1>
      </div>
      <div className="missions-container">
        {missions.map((mission, index) => (
          <CaliforniaMission
            key={index}
            url={mission.url}
            missionImage={mission.image}
            name={mission.name}
          />
        ))}
      </div>
    </>
  );
};

export default App;
