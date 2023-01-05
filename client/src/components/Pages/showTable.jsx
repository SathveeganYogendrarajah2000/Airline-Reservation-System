import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/viewFlights.css";
import { Navigate, useNavigate } from "react-router-dom";
function ShowTable({ flights }) {
  const navigate = useNavigate();
  const handleBookMe = (id) => {
    navigate("/booking/" + id);
    console.log("/booking/" + id);
  };
  return (
    <div className="container table-responsive">
      <table className="table  table-bordered table-striped table-hover">
        <thead className=" table-light">
          <tr>
            <th className="text-center">Flight ID</th>
            <th className="text-center">Origin</th>
            <th className="text-center">Destination</th>
            <th className="text-center">Departure Time</th>
            <th className="text-center">Arival Time</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => {
            const { flight_id, origin, destination, departure_time, arrival_time } = flight;
            return (
              <tr key={flight_id}>
                <td className="text-center">{flight_id}</td>
                <td className="text-center">{origin}</td>
                <td className="text-center">{destination}</td>
                <td className="text-center">{departure_time}</td>
                <td className="text-center">{arrival_time}</td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleBookMe(flight_id);
                    }}
                  >
                    BOOK ME
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTable;