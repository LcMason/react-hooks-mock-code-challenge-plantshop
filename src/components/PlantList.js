import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(plants => setPlants(plants));
  },[])
  

  const plantCards = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
