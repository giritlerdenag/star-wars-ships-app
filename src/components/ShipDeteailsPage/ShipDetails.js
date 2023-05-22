import "./ShipDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getStarshipDetail } from "../../api/ships";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function ShipDetails() {
  const { id } = useParams();
  const [shipDetail, setShipDetail] = useState([]);

  useEffect(() => {
    const fetchShipDetailData = async () => {
      try {
        const response = await getStarshipDetail(id);
        setShipDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShipDetailData();
  },);

  return (
    <div className="shipDetailPage">
      <Link to={"/"}>
        <BsFillArrowLeftSquareFill className="backButton" />
      </Link>
      <div className="detailImgDiv">
        <img
          className="shipImg"
          src={`https://ik.imagekit.io/giritlerdenag/ships/${id}.png`}
          alt=""
        />
      </div>
      <div className="shipInfoDiv">
        <h6
          style={{
            textAlign: "center",
            color: "#f5d033",
            marginBottom: "2rem",
          }}
        >
          {shipDetail.name}
        </h6>
        <div>
          <ul>
            <li>
              <b>Model:</b> {shipDetail.model}
            </li>
            <li>
              <b>Manufacturer: </b>
              {shipDetail.manufacturer}
            </li>
            <li>
              <b>Cost In Credits: </b> {shipDetail.cost_in_credits}
            </li>
            <li>
              <b>Length: </b>
              {shipDetail.length}
            </li>
            <li>
              <b>Max Atmosphering Speed: </b>
              {shipDetail.max_atmosphering_speed}
            </li>
            <li>
              <b>Passengers: </b>
              {shipDetail.passengers}
            </li>
            <li>
              <b>cargo Capacity: </b>
              {shipDetail.cargo_capacity}
            </li>
            <li>
              <b>Consumables: </b>
              {shipDetail.consumables}
            </li>
            <li>
              <b>Hyperdrive rating: </b>
              {shipDetail.hyperdrive_rating}
            </li>
            <li>
              <b>MGLT: </b>
              {shipDetail.MGLT}
            </li>
            <li>
              <b>Starship Class: </b>
              {shipDetail.starship_class}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShipDetails;
