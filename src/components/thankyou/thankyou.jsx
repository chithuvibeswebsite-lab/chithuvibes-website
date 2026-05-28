import { useEffect, useState } from "react";
import { THANKYOU } from "../../data/data";

const WORD = THANKYOU.word;
const CHAR_INTERVAL = 320; // ms between each character
const TOTAL_DURATION = 3000; // ms before redirect

export default function ThankYouScreen({ onDone }) {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;

    const typer = setInterval(() => {
      i++;
      setDisplayed(WORD.slice(0, i));
      if (i >= WORD.length) clearInterval(typer);
    }, CHAR_INTERVAL);

    const redirect = setTimeout(() => {
      onDone();
    }, TOTAL_DURATION);

    return () => {
      clearInterval(typer);
      clearTimeout(redirect);
    };
  }, [onDone]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@300;400&display=swap');

        .thankyou-screen {
          position: fixed;
          inset: 0;
          background-color: #fdf8f2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          gap: 1.5rem;
        }

        .thankyou-word {
          font-family: 'Noto Serif Tamil', serif;
          font-weight: 300;
          font-size: clamp(4rem, 14vw, 9rem);
          color: #1c1209;
          letter-spacing: 0.08em;
          line-height: 1;
          margin: 0;
        }

        .thankyou-cursor {
          display: inline-block;
          width: 2px;
          height: 0.75em;
          background-color: #1c1209;
          margin-left: 6px;
          vertical-align: middle;
          transition: opacity 0.1s;
        }

        .thankyou-sub {
          font-family: 'Noto Serif Tamil', serif;
          font-size: clamp(0.75rem, 2vw, 1rem);
          color: #9c8063;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>

      <div className="thankyou-screen">
        <p className="thankyou-word">
          {displayed}
          <span
            className="thankyou-cursor"
            style={{ opacity: cursorVisible ? 1 : 0 }}
          />
        </p>
        <p className="thankyou-sub">{THANKYOU.subtitle}</p>
      </div>
    </>
  );
}