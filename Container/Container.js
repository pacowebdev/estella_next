import React from 'react';
import Nav from "../compopnents/Nav/Nav";

function Container(props) {
    return (
        <>
            <Nav/>
            {props.children}
        </>
    );
}

export default Container;