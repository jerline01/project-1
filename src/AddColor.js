import { useState } from "react";
import * as React from 'react';
import { ColorBox } from "./App";

function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["red", "orange", "green", "yellow"]);
  return (
    <div>
      <input value={color} style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (<ColorBox color={clr} />))}
      <link to="/addcolor"></link>
    </div>
  );

}
