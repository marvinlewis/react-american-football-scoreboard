import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [ down, setDown ] = useState(0);
  const [ toGo, setToGo ] = useState(0);
  const [ quarter, setQuarter ] = useState(1);



  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
      <div className="down__value">{ down }</div>
        <button onClick = {() => { setDown(down + 1)}}
        onDoubleClick = {()=> {setDown(0)}}
        >Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
      <div className="toGo__value">{ toGo }</div>
      <button onClick = { ()=> { setToGo(toGo + 1)}}
              onDoubleClick = {()=> { setToGo(0)}}
      > To Go </button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
      <div className="quarter__value">{ quarter }</div>
        <button onClick= {() => {setQuarter( quarter + 1)}}
          onDoubleClick = {()=> {setQuarter(0)}}
        > Quarter </button>
      </div>
    </div>
  );
};

export default BottomRow;
