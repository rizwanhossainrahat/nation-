import React from 'react';

const Country = (props) => {
    const {name,population,region,flag}=props.country
    // handleAddCountry k recive korlo props
    const handleAddCountry=props.handleAddCountry
    return (
        <div style={{border:'1px solid red'}}>
            <h1>this is {name}</h1>
            <img style={{height:'100px'}} src={flag} alt="" />
            <h4>population:{population}</h4>
            <p>region:{region}</p>
            <button onClick={()=>handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;