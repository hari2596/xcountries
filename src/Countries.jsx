import React from "react";
import { useState, useEffect } from "react";

const Tile= ({flagUrl, name ,altFlag})=>{
    return (
       
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "8px",
            flexDirection: "column",
            width: "200px",
          }}
        >
          <img
            src={flagUrl}
            alt={altFlag}
            style={{ width: "100px", height: "100px" }}
          />
          <h2>{name}</h2>
        </div>
      
    )
}

function Countries() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  console.log({ countries });

  return (
    <div
    style={{
        
      display: "flex",
     
      justifyContent: "center",
      alignContent: "center",
      height: "100vh",
      flexWrap: "wrap",
      marginTop: "20px", // Adjusted marginTop
      paddingTop: "20px", // Added paddingTop
    }}
  >
   {countries.map((country) => (
    <Tile flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt}  />
))}
 
    </div>
  );
}

export default Countries;
