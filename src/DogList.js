import React from "react";
import { Link } from "react-router-dom";
import DogDetails from "./DogDetails";

const DogList = ({ dogs }) => {

    return (
        <div className="DogList">
            <ul>
            {dogs.map((dog, index) => (
                <li key={index}>
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                        <DogDetails details={dog} />
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default DogList;