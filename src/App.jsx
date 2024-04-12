import "./styles.css";
import test from "./assets/images/text-img.webp";
import Plx from "react-plx";
import { Buttons } from "./Buttons/Buttons";

export default function App() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 3.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 0,
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 900,
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 30,
          width: "100%",
          zIndex: -1,
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 200,
            end: 500,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "19vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "20vw",
          }}
          src="/download.webp"
          alt="Goonies"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 900,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "1vw",
          width: "100%",
        }}
      >
        <div>
          {/* <img
            style={{
              width: "20vw",
            }}
            src={test}
            alt="test"
          />
          <h1>Васины кнопки</h1> */}
          <Buttons />
        </div>
      </Plx>
    </div>
  );
}
