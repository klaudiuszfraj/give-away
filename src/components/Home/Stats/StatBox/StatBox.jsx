import React from 'react';


function StatBox({ number, title, text }) {
 return (
  <div>
      <h1>{number}</h1>
      <h2>{title}</h2>
      <p>{text}</p>

  </div>
 );
}
export default StatBox;