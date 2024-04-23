import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Background from "react-background-noise";
import { Promo } from "./Promo/Promo";
import "./App.css";

// https://codepen.io/egor-sorokin/pen/xXpGzw
// https://preview.themeforest.net/item/vice-music-band-dj-and-radio-wordpress-theme/full_screen_preview/10067870?_ga=2.119975052.546211214.1713040398-271996780.1711823979
// https://codesandbox.io/p/sandbox/scroll-based-animation-nqhw4?file=%2Fsrc%2Findex.js

function App() {
  return (
    // <div className="App">
    //   {/* <Background gridSize={32}> */}
    //   <Promo />
    //   {/* </Background> */}
    // </div>
    <Canvas>
      <ambientLight />
      <directionalLight color="red" intensity={10} />
      <Suspense fallback={null}>
        <Promo />
      </Suspense>
    </Canvas>
  );
}

export default App;
