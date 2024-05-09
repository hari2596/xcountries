import React from "react";
import { useState, useEffect } from "react";
import "./Countries.css";

const Tile = ({ flagUrl, name, altFlag }) => {
    return (
        <div className="tile">
            <img src={flagUrl} alt={altFlag} className="flag-image" />
            <h2>{name}</h2>
        </div>
    );
};

function Countries() {
    const API_URL = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error)=>console.error("Encountered error: ", error));
    }, []);

    console.log({ countries });

    return (
        <div className="countries">
            {countries.map((country) => (
                <Tile key={country.cca2} flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt} />
            ))}
        </div>
    );
}

export default Countries;
