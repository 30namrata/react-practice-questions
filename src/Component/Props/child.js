import React from 'react'

const Child = ({ name, age, gender }) => {
    console.log(name, age, gender);
    return (
        <>
            <div style={{ color: 'white' }}>Child</div>
            <div style={{ color: 'white' }}>Name: {name}</div>
            <div style={{ color: 'white' }}>Age: {age}</div>
            <div style={{ color: 'white' }}>Gender: {gender}</div>
        </>
    )
}

export default Child