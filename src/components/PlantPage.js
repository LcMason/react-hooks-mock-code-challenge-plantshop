import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {
 
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(plants => setPlants(plants));
  },[])
  
  
  const createPlant = (plantObj) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(plantObj)
    })
    .then((r) => r.json())
    .then((newPlant) => setPlants(previousPlants => [...previousPlants, newPlant]))
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const handleDeletePlant = (id) => {
    const updatedPlantArr = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlantArr)
  }

  const handleUpdatedPlant = (updatedPlant) => {
    const updatedPlantArr = plants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plant;
      }
    });
    setPlants(updatedPlantArr)
  }


  return (
    <main>
      <NewPlantForm createPlant={createPlant}  />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      <PlantList plants={displayedPlants} onDelete={handleDeletePlant} onUpdatePlant={handleUpdatedPlant} />
    </main>
  );
}

export default PlantPage;
