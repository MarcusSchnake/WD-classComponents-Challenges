import React from 'react';
import CatIndex from './CatIndex';

const CatList = (props) => {
  return (
    <div className="main">
      <div className="mainDiv">
        {props.cats.map(cat => <li>{cat}</li>)}
      </div>
    </div>
  )
}

export default CatList;
