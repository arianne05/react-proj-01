import React from 'react';
import {useState} from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toogleTab = (index: number) => {
    console.log(index);
    setToggleState(index);
  }

  return (
    <>
      <button onClick={() => toogleTab(1)}>Tab1</button>
      <button onClick={() => toogleTab(2)}>Tab2</button>
      <button onClick={() => toogleTab(3)}>Tab3</button>

      {toggleState === 1 && <div>Content for Tab 1</div>}
      {toggleState === 2 && <div>Content for Tab 2</div>}
      {toggleState === 3 && <div>Content for Tab 3</div>}
    </>
  )
}

export default Tabs