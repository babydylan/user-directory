import React from "react";

function Rows(props){
    return (
        <tr>
        <th scope="row"><img src= {props.image} alt= {props.lastName}></img></th>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
    </tr>
    );
}



export default Rows;