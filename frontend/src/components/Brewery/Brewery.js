import React from "react";

const brewery = {
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipCode: '10101',
}

function Brewery() {
    return (
        <div className="Brewery">
        <h2>{brewery.name}</h2>
        <div className="Brewery-information">
          <div className="Brewery-address">
            <p>{brewery.address}</p>
            <p>{brewery.city}</p>
            <p>{`${brewery.state} ${brewery.zipCode}`}</p>
          </div>
        </div>
      </div>
    );
}

export default Brewery;