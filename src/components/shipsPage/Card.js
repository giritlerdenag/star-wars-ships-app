//import css
import "./ShipsPage.css"
//IMPORT ELEMENT
import React, { useEffect, useState } from "react";
import {
  getStarships,
  loadMoreStarship,
  searchStarship,
  getStarshipId,
} from "../../api/ships";
import { Button, Container, Row, Col, Input, InputGroup } from "reactstrap";


//IMPORT COMPONENTS

import CardItem from "./CardItem";

function Card() {
  const [ships, setShips] = useState([]);
  const [next, setNext] = useState(1);
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    const fetchShipData = async () => {
      //fetch işlemini yapan fonksiyon
      try {
        const response = await getStarships();
        setShips(response.data.results);
        setNext(response.data.next);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShipData();
  }, []);

  const handleLoadMoreClick = async (nextUrl) => {
    if (!nextUrl) {
      return;
    }

    try {
      const response = await loadMoreStarship(nextUrl);
      setShips((previusShips) => [...previusShips, ...response.data.results]);
      setNext(response.data.next);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };

  const filter = async (value) => {
    try {
      const response = await searchStarship(value);
      setShips(response.data.results);
      setNext(response.data.next);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h2 className="header">WARS DO NOT MAKE ONE GREAT...</h2>
      <Container>
        <Row className="row-cols-lg-auto align-items-center">
          <Col
            md={{
              offset: 4,
              size: 2,
            }}
            xs={{
              offset: 1,
              size: 10,
            }}
          >
            <InputGroup>
              <Input placeholder="Name / Model" onChange={handleChange} />
              <Button onClick={() => {
                filter(inputQuery);
              }}>
                Filter
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <hr />
        </Row>
      </Container>
      <Container fluid="xs">
        <Row>
          {ships.map((ship, i) => {
            const id = getStarshipId(ship.url);
            return <CardItem item={ship} key={i} id={id} />;
          })}
        </Row>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col
            md={{
              offset: 10,
              size: 1,
            }}
            xs={{
              offset: 7,
              size: 5,
            }}
          >
            <Button
              className="loadMoreButton"
              onClick={() => {
                handleLoadMoreClick(next);
              }}
            >
              Load More...
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;
