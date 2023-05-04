import React, { Component } from 'react';

const MyNewComponent = (props) => {
    
        return(
            <div>
                <h1>{props.lastname}, {props.firstname}</h1>
                <h2>Age:  {props.age}</h2>
                <h2>Hair Color: {props.haircolor}</h2>
            </div>


        )
    }



export default MyNewComponent;