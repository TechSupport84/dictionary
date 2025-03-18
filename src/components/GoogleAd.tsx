import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const GoogleAd: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      const adContainer = document.getElementById("ad-container");
      if (adContainer) {
        adContainer.innerHTML = "";

        const adSlot = document.createElement("ins");
        adSlot.className = "adsbygoogle";
        adSlot.style.display = "block";
        adSlot.setAttribute("data-ad-client", "ca-pub-8628829898524808");
        adSlot.setAttribute("data-ad-slot", "9137501297");
        adSlot.setAttribute("data-ad-format", "auto");
        adSlot.setAttribute("data-full-width-responsive", "true");

        adContainer.appendChild(adSlot);

        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, []);

  return <div id="ad-container" style={{ minHeight: "250px" }}></div>;
};

export default GoogleAd;
