import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import getLogo from "./utils/getLogo";
import GWLogo from "./assets/gw_monogram_1c.png";
import QRCodeStyling from "qr-code-styling";

const GWColors = {
  blue: "#033C5A",
  buff: "#AA9868",
  white: "#FFFFFF",
  blue2: "#0190DB",
  bg: "#F8E08E",
};

export default function App() {
  const [url, setUrl] = useState("https://www.law.gwu.edu/");
  const [size, setSize] = useState(400);
  const [logo, setLogo] = useState(getLogo("GWLogo5"));
  const [style, setStyle] = useState("square");
  const [squareStyle, setSquareStyle] = useState("square");
  const [cornersStyle, setCornersStyle] = useState("square");
  const [theme, setTheme] = useState("light");
  const qrCode = useRef(null);

  let qr = new QRCodeStyling({
    width: 300,
    height: 300,
    image: GWLogo,
    dotsOptions: {
      color: GWColors.blue,
      type: "square",
    },
    imageOptions: {
      margin: 10,
      imageSize: 0.75,
    },
    qrOptions: {
      typeNumber: "9",
    },
  });

  useEffect(() => {
    qr.update({
      data: url,
      image: logo,
      width: size,
      height: size,
      imageOptions: {
        margin: size / 50,
        imageSize: 0.75,
      },
      dotsOptions: {
        color: theme === "light" ? GWColors.blue : GWColors.white,
        type: style,
      },
      cornersDotOptions: {
        type: cornersStyle,
        color: GWColors.buff,
      },
      cornersSquareOptions: {
        type: squareStyle,
      },
      backgroundOptions: {
        color: theme === "light" ? GWColors.white : GWColors.blue,
      },
    });
    qrCode.current.innerHTML = "";
    qr.append(qrCode.current);
  }, [url, logo, size, style, squareStyle, cornersStyle, theme]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const handleLogoChange = (logo) => {
    setLogo(getLogo(logo));
  };

  const handleSizeChange = (size) => {
    setSize(size);
  };
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setLogo(() => {
      if (theme === "light") {
        return getLogo("GWLogo10");
      } else {
        return getLogo("GWLogo5");
      }
    });
  };

  const options = [
    "square",
    "dot",
    "rounded",
    "dots",
    "classy",
    "classy-rounded",
    "extra-rounded",
  ];

  return (
    <section className="container">
      <div className="left">
        <div className="heading">
          <img src={GWLogo} width={100} alt="GW Logo" style={{ padding: 25 }} />
          <h1 className="heading__title">Generate a GW QR code</h1>
        </div>
        <form name="form">
          <label className="form__label" htmlFor="input">
            Paste your URL Here 👇
          </label>

          <input
            className="form__input"
            type="text"
            id="input"
            name="input"
            required
            value={url}
            onChange={onUrlChange}
            autoFocus
          />
          <fieldset>
            <label className="form__label" htmlFor="darkmode-toggle">
              Theme
            </label>
            <input
              type="checkbox"
              className="sr-only"
              id="darkmode-toggle"
              onChange={handleThemeChange}
            />
            <label htmlFor="darkmode-toggle" className="toggle span2">
              <span>Toggle dark mode</span>
            </label>

            <label className="form__label" htmlFor="size">
              QR Code Size
            </label>
            <input
              type="range"
              min="300"
              max="800"
              value={size}
              className="span2"
              onChange={(e) => handleSizeChange(e.target.value)}
            />
            <label className="form__label" htmlFor="logo">
              Logo
            </label>
            <select
              className="span2"
              name="logo"
              id="logo"
              onChange={(e) => handleLogoChange(e.target.value)}
            >
              {theme === "light" ? (
                <>
                  <option value="GWLogo">Primary 1 color</option>
                  <option value="GWLogo5" selected={true}>
                    Primary 2 colors
                  </option>
                  <option value="GWLogo6">Primary Black</option>
                  <option value="GWLogo2">Monogram 2 colors</option>
                  <option value="GWLogo3">Monogram Black</option>
                  <option value="GWLogo4">Monogram 1 color</option>
                </>
              ) : (
                <>
                  <option value="GWLogo7">Monogram 2 colors</option>
                  <option value="GWLogo8">Monogram White</option>
                  <option value="GWLogo9">Primary White</option>
                  <option value="GWLogo10" selected={true}>
                    Primary 2 colors
                  </option>
                </>
              )}
            </select>
            <label className="form__label mobile-none">Style</label>

            <label htmlFor="mainDots">MainDots</label>
            <label htmlFor="CornerSquares">Corner squares</label>
            <label htmlFor="CornerDots"> Corner dots</label>

            <label className="form__label"></label>
            <select
              name="style"
              id="mainDots"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              name="style"
              id="CornerSquares"
              value={squareStyle}
              onChange={(e) => setSquareStyle(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              name="style"
              id="CornerDots"
              value={cornersStyle}
              onChange={(e) => setCornersStyle(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </fieldset>
          <br />
        </form>
      </div>

      <div className="right">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: size / 10,
          }}
        >
          <div ref={qrCode} />
        </div>
        <button
          className="button"
          onClick={() => qr.download({ name: "GWQRCode", extension: "png" })}
        >
          <span>Download</span>
        </button>
        <br />
        Make sure to follow GW logo 👉{" "}
        <a href="https://communications.gwu.edu/visual-identity/logos">
          Guidelines
        </a>{" "}
        before printing
      </div>
    </section>
  );
}
