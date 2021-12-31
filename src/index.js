import React from 'react';
import ReactDom from 'react-dom';




const index = 0;

setInterval( () =>
{

  const element = (
    <h1 className='heading' tabIndex={index}>
      <span className='text'>Time {new Date().toLocaleTimeString() }</span>
    </h1>
  );
  
  ReactDom.render(element, document.getElementById('root'));

},1000);


