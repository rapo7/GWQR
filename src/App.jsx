import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import GWLogo from "./assets/gw_monogram_1c.png";
import "./App.css";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: GWLogo,
  dotsOptions: {
    color: "#003a5d",
    type: "square",
  },
  imageOptions: {
    margin: 5,
    imageSize: 0.5,
  },
  qrOptions: {
    typeNumber: "9",
  },
});

export default function App() {
  const [url, setUrl] = useState("https://law.gwu.edu");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: "jpeg",
    });
  };

  return (
    <section className="container">
      <div className="heading">
        <img src={GWLogo} width={50} alt="GW Logo" style={{ padding: 25 }} />
        <h1 className="heading__title">Generate a GW QR code</h1>
      </div>
      <form Name="form">
        <div>
          <label className="form__label" for="todo">
            Paste your URL Here 👇
          </label>
          <input
            className="form__input"
            type="text"
            id="todo"
            name="to-do"
            size="30"
            required
            value={url}
            onChange={onUrlChange}
            autoFocus
          />
        </div>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="qr-code" ref={ref} />
      </div>
      <br />
      <button className="button" onClick={onDownloadClick}>
        <span>Download</span>
      </button>
      <br />
      Made with ❤️ by Media Center at GW Law
    </section>
  );
}
