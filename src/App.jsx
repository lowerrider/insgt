import "./styles.css";
import Plx from "react-plx";
import { Button } from "./Button/Button";
import { useState } from "react";
import { Intro } from "./Content/Intro";
import { Documents } from "./Documents/Documents";
import { ABOUT_US, DOCUMENTS, MAIN_CONTENT } from "./constants/constants";

// https://preview.themeforest.net/item/cyberpulse-gaming-esports-theme-for-wordpress/full_screen_preview/31448785?_ga=2.174000039.546211214.1713040398-271996780.1711823979
// https://preview.themeforest.net/item/vice-music-band-dj-and-radio-wordpress-theme/full_screen_preview/10067870?_ga=2.119975052.546211214.1713040398-271996780.1711823979

export default function App() {
  const [content, setContent] = useState(MAIN_CONTENT);

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
        }}>
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
        }}>
        {/* <img style={{ width: "100%" }} src="background.jpg" alt="background" /> */}
        <div className="back"></div>
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
        }}>
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
        }}>
        <div className="btns">
          {/* <img
            style={{
              width: "20vw",
            }}
            src={test}
            alt="test"
          />
          <h1>Васины кнопки</h1> */}
          <div className="linkes">
            <Button onClick={() => setContent(ABOUT_US)} text="О нас" />
            <Button onClick={() => setContent(DOCUMENTS)} text="Документы" />
          </div>

          {content === MAIN_CONTENT && (
            <div>
              <h1>Проектная группа ИТ специалистов</h1>
              <h3>Разработка и внедрение решений любой сложности</h3>
            </div>
          )}

          {content === ABOUT_US && <div>about us</div>}
          {content === DOCUMENTS && <Documents />}
        </div>
        <div className="secondDiv"></div>
      </Plx>
      <div className="secondDiv"></div>
    </div>
  );
}
