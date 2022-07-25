import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [newLink, setnewLink] = useState('');
  const [link, setLink] = useState('');

  const displayImage = document.getElementById('imagePlace');
  const qrimageg = `https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl=${link}`;
  const qrimage = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${link}`;
  function handleQrLink(event) {
    event.preventDefault();
    setnewLink('');
    setLink(newLink);
    displayImage.style.display = 'block';
  }
  function handleNewQrLink(event) {
    event.target.setCustomValidity('');
    setnewLink(event.target.value);
  }
  return (
    <div>
      <h1>INSERT THE LINK</h1>
      <div>
        <form onSubmit={handleQrLink}>
          <input
            type="text"
            placeholder="link para o qrCode"
            name="qrlink"
            value={newLink}
            onChange={handleNewQrLink}
          />

          <button type="submit">Gerar qrCode</button>
        </form>
      </div>
      <div style={{ display: 'none' }} id="imagePlace">
        <p>
          Link do qr code:
          <a href={link}>{link}</a>
        </p>
        <a href={qrimage} download>
          <img src={qrimage} alt="" />
        </a>
        <div style={{ marginTop: '1rem' }}>
          <a href={qrimageg} download>
            <img src={qrimageg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
