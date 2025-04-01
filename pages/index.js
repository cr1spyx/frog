import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Fullpage = dynamic(() => import('@fullpage/react-fullpage'), { ssr: false });

const imagePaths = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png"
];

export default function Home() {
  const audioRef = useRef(null);
  const [isMuted, setMuted] = useState(false);
  const frogRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  const spinFrog = () => {
    if (frogRef.current) {
      frogRef.current.classList.add("spinning-loop");
    }
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <Head>
    <link rel="icon" type="image/png" href="/favicon.png" />
        <title>SPINNY</title>
      </Head>

      <div className="mute-button" onClick={toggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </div>

      <audio ref={audioRef} loop preload="auto">
        <source src="/spin-you-right-round.mp3" type="audio/mpeg" />
      </audio>

      <Fullpage
        scrollingSpeed={1000}
        render={() => (
          <>
            {/* HERO SECTION */}
            <div className="section fp-section hero-intro">
              <img src="/spinning-frog-hero.gif" alt="Spinning Frog" className="hero-gif" />
              <p className="hero-caption">
                It all began with a spin.<br />
                The rainforest frog twirled across timelines, unbothered and eternal.<br />
                A meme. A moment. A movement.
              </p>

              <h2 className="frog-name">$SPINNY</h2>
              <img src="/frog.png" alt="Frog" className="frog-promo-img" ref={frogRef} />

              <div className="spin-button-wrapper" style={{ marginTop: "0.5rem" }}>
                <button onClick={spinFrog} className="spin-button">SPIN</button>
              </div>

              <div className="contract-box">CA: DYKCPaJ5BRj2BeFKZZmLMRkiPcriopA5KJWKqaRZpump!</div>

              <div className="link-icons">
                <a href="https://x.com/SpinningFrogCT" target="_blank" rel="noopener noreferrer">
                  <img src="/xlogo.png" alt="Twitter" />
                </a>
                <a href="https://pump.fun/coin/DYKCPaJ5BRj2BeFKZZmLMRkiPcriopA5KJWKqaRZpump" target="_blank" rel="noopener noreferrer">
                  <img src="/pflogo.png" alt="Pump.fun" />
                </a>
                <a href="https://x.com/rainforestpussy/status/1906254789324759392?s=46" target="_blank" rel="noopener noreferrer">
                  <img src="/meme.png" alt="Meme" />
                </a>
              </div>
            </div>

            {/* GALLERY */}
            <div className="section fp-section">
              <h1>FROG GALLERY</h1>
              <div className="gallery-grid">
                {imagePaths.map((src, i) => (
                  <div key={i} className="gallery-item">
                    <img src={src} alt={`Frog Scenario ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* TOKENOMICS */}
            <div className="section fp-section">
              <h1>FROGONOMICS</h1>

              <div className="tokenomics-section">
                <div className="token-grid">
                  <div className="token-card">
                    <h3>🔥 Liquidity Burned</h3>
                    <img src="/tokenomics/burn.png" alt="Burn" className="token-image" />
                    <p>So hot it boiled the pond.</p>
                  </div>
                  <div className="token-card">
                    <h3>🪲 0% Tax</h3>
                    <img src="/tokenomics/tax.png" alt="No Tax" className="token-image" />
                    <p>No fees. Just flies and vibes.</p>
                  </div>
                  <div className="token-card">
                    <h3>🚀 Fair Launch</h3>
                    <img src="/tokenomics/fairlaunch.png" alt="Fair Launch" className="token-image" />
                    <p>Spun straight from the swamp — no presale drama.</p>
                  </div>
                  <div className="token-card">
                    <h3>🛰 One Billion Spinnys</h3>
                    <img src="/tokenomics/supply.png" alt="Token Supply" className="token-image" />
                    <p>One billion Spinnys spinning in orbit.</p>
                  </div>
                </div>
              </div>

              <h2 style={{ marginTop: "3rem" }}>🛒 How to Buy Spinny</h2>
              <ol style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", color: "#fff", listStylePosition: "inside" }}>
                <li>Download Phantom</li>
                <li>Get SOL – Buy it on an exchange like Coinbase, send to Phantom.</li>
                <li>Go to Pump.fun – Search for $SPINNY.</li>
                <li>Enjoy the amphibious ride.</li>
              </ol>
            </div>
          </>
        )}
      />
    </>
  );
}
