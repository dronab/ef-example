import React from 'react';

function CustomList(property) {
    const myList = (
        <div>
            {property.peapole.map((person) => {
                return (
                <div key={person.id}>
                    <img src={person.avatar} style={{ width: '52px', height: '52px' }} alt={person.avatar}/>
                    <span>{person.email}</span>
                </div>
                );
            })};
        </div>
    )
    return myList;
}

export default CustomList;

