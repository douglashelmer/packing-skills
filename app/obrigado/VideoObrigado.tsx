"use client";

import Script from "next/script";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { id?: string };
    }
  }
}

export default function VideoObrigado() {
  return (
    <>
      <Script id="vturb-timing-obrigado" strategy="afterInteractive">{`
        !function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);
      `}</Script>
      <Script
        src="https://scripts.converteai.net/cf533d56-a2aa-46c6-aec0-00c4e82a7d9f/players/6a3552e7e502d7d800d3184f/v4/player.js"
        strategy="afterInteractive"
      />
      <vturb-smartplayer
        id="vid-6a3552e7e502d7d800d3184f"
        style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
      />
    </>
  );
}
