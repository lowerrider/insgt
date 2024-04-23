import { useRef } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import classNames from "classnames";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "../components/Html";
import { Objects } from "../components/Objects";
import { Particles } from "../components/Particles";

import cn from "./Promo.module.scss";

export const Promo = () => {
  // const parallax = useRef(null);

  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Particles />
        <Objects />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>

    // <Parallax ref={parallax} pages={3}>
    //   <ParallaxLayer
    //     offset={1}
    //     speed={1}
    //     style={{ backgroundColor: "#805E73" }}
    //   />
    //   <ParallaxLayer
    //     offset={2}
    //     speed={1}
    //     style={{ backgroundColor: "#87BCDE" }}
    //   />

    //   <ParallaxLayer
    //     offset={0}
    //     speed={0}
    //     factor={3}
    //     style={{
    //       backgroundImage:
    //         "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
    //       backgroundSize: "cover",
    //     }}
    //   />
    //   <div className={cn.wrapper}>
    //     {/* <div className={cn.content}> */}
    //     <MouseParallax shouldPause isAbsolutelyPositioned>
    //       <div className={cn.content}>
    // <h2
    //   class={classNames(cn.hero, cn.glitch, cn.layers)}
    //   dataText="INSIGHT">
    //   INSIGHT
    // </h2>
    //         <p className={cn.text}>Проектная группа ИТ специалистов</p>
    //         <p className={cn.text}>
    //           Разработка и внедрение решений любой сложности
    //         </p>
    //       </div>
    //     </MouseParallax>
    //     {/* </div> */}
    //   </div>
    // </Parallax>
  );
};
// "hero glitch layers"

// https://codepen.io/mattgrosswork/pen/VwprebG

// https://codesandbox.io/p/sandbox/vertical-parallax-h1rrv?file=%2Fsrc%2FApp.tsx%3A19%2C21

// https://react-just-parallax.michalzalobny.com/

//    color: #253237;

//             "https://awv3node-homepage.surge.sh/build/assets/stars.svg",
