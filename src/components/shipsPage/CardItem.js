import "./ShipsPage.css";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import ShipDetailsPage from "../ShipDeteailsPage/ShipDetails";

function CardItem(props) {
  return (
    <>
      <Col xl="2" md="3" xs={{ offset: 0, size: 5}} className="shipCard">
        <Link
          element={<ShipDetailsPage></ShipDetailsPage>}
          to={props.id}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cardDiv">
            <div className="shipImgDiv">
              <img
                className="cardImg"
                src={`https://ik.imagekit.io/giritlerdenag/ships/${props.id}.png`}
                alt=""
              />
            </div>

            <h6 style={{ textAlign: "center", color: "#f5d033", paddingTop: "0.5rem" }}>
              {props.item.name}
            </h6>
            <div className="shipInfo">
              <p>
                <b>Model:</b>
                <br />
                {props.item.model}
              </p>
              <p>
                <b>Hyperdrive rating:</b> {props.item.hyperdrive_rating}
              </p>
            </div>
          </div>
        </Link>
      </Col>
    </>
  );
}

export default CardItem;
