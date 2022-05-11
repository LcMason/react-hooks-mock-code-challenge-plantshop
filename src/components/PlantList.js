import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDeletePlant, onUpdatePlant}) {
  
  const plantCards = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} onDeletePlant={handleDeletePlant} onUpdatePlant={onUpdatePlant} />
  })





  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
