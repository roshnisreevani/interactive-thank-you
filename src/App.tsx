import { useState } from "react";
import "./App.css";

import scene1 from "./assets/scene1.png";
import envelope from "./assets/envelope.png";
import seal from "./assets/seal.png";

import scene2 from "./assets/scene2envelope.png";
import scene3 from "./assets/scene3peek.png";

import letter1 from "./assets/letter1.png";
import letter2 from "./assets/letter2.png";

import end from "./assets/end.png";

function App() {
  const [stage, setStage] = useState<
    "intro" | "open" | "peek" | "letter" | "end"
  >("intro");

  function handleClick() {
    if (stage === "intro") {
      setStage("open");
    } else if (stage === "open") {
      setStage("peek");
    } else if (stage === "peek") {
      setStage("letter");
    }
  }

  return (
    <main className="page" onClick={handleClick}>
      <img className="background" src={scene1} alt="" />

      {stage === "intro" && (
        <section className="intro-screen">
          <img className="envelope-art" src={envelope} alt="Envelope" />
          <img className="seal-art" src={seal} alt="Seal" />
          <p className="hint">click to open</p>
        </section>
      )}

      {stage === "open" && (
        <img
          className="scene"
          src={scene2}
          alt="Envelope opening"
        />
      )}

      {stage === "peek" && (
        <img
          className="scene"
          src={scene3}
          alt="Letter peeking out"
        />
      )}

      {stage === "letter" && (
        <section
          className="letter-screen"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Floating Hearts */}
          <div className="heart-particles">
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
          </div>

          {/* Decorative Effects */}
          <div className="effects">
            <div className="paper-plane">✈️</div>
            </div>

            

            

          {/* Letter */}
          <div className="letter-scroll">
            <img
              className="letter-image"
              src={letter1}
              alt="Letter page 1"
            />

            <img
              className="letter-image"
              src={letter2}
              alt="Letter page 2"
            />
          </div>
        </section>
      )}

      {stage === "end" && (
        <img
          className="scene"
          src={end}
          alt="Final thank you"
        />
      )}
    </main>
  );
}

export default App;