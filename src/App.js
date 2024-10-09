import "./styles.css";
import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [inputValue, setInputValue] = useState("");
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState("");

  const handleAddRobot = () => {
    const newRobot = inputValue.trim();
    if (robots.includes(newRobot)) {
      setError("Robot listede bulunmakta!");
      return;
    }
    if (newRobot) {
      setRobots([...robots, newRobot]);
      setInputValue("");
      setError("");
    } else {
      setError("Lütfen bir robot ismi girin!");
    }
  };

  const handleRemoveRobot = (robot) => {
    setRobots(robots.filter(r => r !== robot));
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
        placeholder="Robot ismi girin"
      />
      <button onClick={handleAddRobot} style={styles.button}>Ekle</button>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.robotList}>
        {robots.map((robot) => (
          <div key={robot} style={styles.robotContainer}>
            <img
              src={`https://robohash.org/${robot}`}
              alt={robot}
              onClick={() => handleRemoveRobot(robot)}
              style={styles.robotImage}
            />
            <p style={styles.robotName}>{robot}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px"
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    width: "200px",
    textAlign: "center"
  },
  button: {
    border: "2px solid #66ffff",
    borderRadius: "5px", 
    backgroundColor:"#33ccff",
    padding: "5px 35px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    margin: "10px 0"
  },
  robotList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px"
  },
  robotContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },
  robotImage: {
    width: "100px",
    height: "100px",
    cursor: "pointer"
  },
  robotName: { 
    marginTop: "5px",
    textAlign: "center"
  }
};

export default App;
