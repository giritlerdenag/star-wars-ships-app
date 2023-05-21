import React from "react";
import { Container, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import ShipDetailsPage from "./ShipDeteailsPage/ShipDetails";
import Card from "./shipsPage/Card";

function MainComponent() {
  return (
    <div>
      <Container>
        <Row>
          <Routes>
            <Route path="/:id" element={<ShipDetailsPage />} />
            <Route path="/" element={<Card />} />
          </Routes>
        </Row>
      </Container>
    </div>
  );
}

export default MainComponent;
