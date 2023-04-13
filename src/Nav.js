import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ dogs = defaultProps }) => {
    return (
        <ul>
            {dogs.map(dog => (
                <li key={dog.name}>
                    <Link to={`/dog/${dog.name}`}>{dog.name}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Nav;