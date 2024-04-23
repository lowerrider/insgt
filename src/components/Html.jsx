import React from "react";
import { Insight } from "./Insight/Insight";

export const Html = () => {
  return (
    <>
      <Insight
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#292828",
        }}
      />
      <h1
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-65%)",
          color: "#f4b677",
        }}>
        Your Future
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "250vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#673ab7",
        }}>
        Awaits
      </h1>
    </>
  );
};
