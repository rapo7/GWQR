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
    <section class="container">
      <div class="heading">
        <img src={GWLogo} width={50} alt="GW Logo" style={{ padding: 25 }} />
        <h1 class="heading__title">Generate a GW QR code</h1>
      </div>
      <form class="form">
        <div>
          <label class="form__label" for="todo">
            Paste your URL below
          </label>
          <input
            class="form__input"
            type="text"
            id="todo"
            name="to-do"
            size="30"
            required
            value={url}
            onChange={onUrlChange}
          />
          <button class="button" onClick={onDownloadClick}>
            <span>Download</span>
          </button>
        </div>
      </form>
      <div>
        <div ref={ref} />
      </div>
      Made with ❤️ by Media Center at GW Law
    </section>
  );
}
