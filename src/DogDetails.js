import React from "react";
import { useParams } from "react-router-dom"


const DogDetails = ({ dogs }) => {
    const { name } = useParams();

    if (!dogs) {
        return <h2>Loading...</h2>;
      }

    const dog = dogs.find(d => d.name.toLowerCase === name.toLowerCase());

    if (!dog) {
        return <h2>Dog Not Found</h2>
    }
    return (
        <div className="DogDetails">
            <h2>{dog.name}</h2>
            <img src={dog.src} alt={dog.name} />
            <p>Age: {dog.age}</p>
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
         </div>
    );
}

export default DogDetails;