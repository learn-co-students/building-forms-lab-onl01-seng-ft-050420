
     import React from 'react';
     //debugger
     
      const Band = (props) => {
           console.log(props)
            //debugger
       const bands = props.bands.map((band) =>{
       return <li>{band.name}</li>;
       })
       return<div>{bands}</div>
     }
     //all functional components must have const before them
     //comment out what is breaking, then use console logs to see what is being returned
     export default Band;
 