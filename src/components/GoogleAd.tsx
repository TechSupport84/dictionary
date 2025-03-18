
import React, { useEffect } from "react";

type AdsComponentProps = {
  dataAdSlot: string;
};

declare global {
  interface Window {
    adsbygoogle: unknown[]; 
  }
}

const AdsComponent: React.FC<AdsComponentProps> = ({ dataAdSlot }) => {
  useEffect(() => {
    if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "400px", height: "250px" }}
      data-ad-client="ca-pub-8628829898524808"
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-adtest="on"
    ></ins>
  );
};

export default AdsComponent;
