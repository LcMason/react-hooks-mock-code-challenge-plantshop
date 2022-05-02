import { create } from "json-server";
import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {
 


  // function createPlant(plantObj) {
  //   fetch("http://localhost:6001/plants", {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(plantObj)
  //   })
  //   .then((r) => r.json())
  //   .then(() => ()
  // }

  return (
    <main>
      <NewPlantForm  />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
