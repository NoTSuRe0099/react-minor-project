import React from "react";

const Ez = (props) => {
    console.log(props.profile.name);
    let name = props.profile.name;
    return (
        <>
            <h1>Hallow my name is {name}</h1>
            <h1> {props.children} </h1>
        </>
    );
};

export default Ez;
