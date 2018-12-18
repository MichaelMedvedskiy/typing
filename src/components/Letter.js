import React from 'react';


const Letter = ({character, type})=>(
    <li className={type}>
        {character}
    </li>
);

export default Letter;