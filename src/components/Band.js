
     import React from 'react';
     //debugger
     
      const Band = (props) => {
           //debugger
      const bands = props.bands.map((band) =>{
      return <li>{band.name}</li>;
      })
      return<div>{bands}</div>
     }
     //all functional components must have const before them
     
     export default Band;
 