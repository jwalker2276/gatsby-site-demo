import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Vehicle from "./vehicle";
// Temp data
import jsonData from "../../utils/vehicledata.json";

const Vehicles = () => {
  // State
  const [vehicles, updateVehicles] = useState([]);

  useEffect(() => {
    console.log("fetched vehicle data");
    const tempVehicles = JSON.parse(JSON.stringify(jsonData));

    // Update State
    updateVehicles(tempVehicles);
  }, []);

  return (
    <VehiclesGrid>
      {vehicles.map(vehicle => (
        <Vehicle vehicleData={vehicle} key={vehicle._id} />
      ))}
    </VehiclesGrid>
  );
};

export default Vehicles;

const VehiclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 10px;
  padding: 16px 0 0 0;
  border-top: 2px solid var(--shadow);
  border-bottom: 2px solid var(--shadow);

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
