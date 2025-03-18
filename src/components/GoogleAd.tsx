import { useEffect, useCallback } from "react";

interface GoogleAdProps {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const GoogleAd: React.FC<GoogleAdProps> = ({
  slot,
  format = "auto",
  fullWidthResponsive = true,
}) => {
  // Clears the ad placeholder and creates a new ad container
  const reinitializeAdContainer = useCallback(() => {
    const adPlaceholder = document.getElementById("ad-placeholder");
    if (adPlaceholder) {
      adPlaceholder.innerHTML = ""; // Clear existing ads
    }
    const ins = document.createElement("ins");
    ins.id = "ads-container";
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", "ca-pub-8628829898524808");
    ins.setAttribute("data-ad-slot", slot);
    ins.setAttribute("data-ad-format", format);
    ins.setAttribute(
      "data-full-width-responsive",
      fullWidthResponsive ? "true" : "false"
    );
    if (adPlaceholder) {
      adPlaceholder.appendChild(ins);
    } else {
      document.body.appendChild(ins);
    }
  }, [slot, format, fullWidthResponsive]);

  // Loads the AdSense script and pushes an ad after reinitializing the container
  const loadAds = useCallback(() => {
    if (typeof window !== "undefined") {
      if (!window.adsbygoogle) {
        window.adsbygoogle = [];
      }
      const scriptId = "adsbygoogle-js";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        script.onload = () => {
          reinitializeAdContainer();
          window.adsbygoogle.push({});
        };
      } else {
        reinitializeAdContainer();
        window.adsbygoogle.push({});
      }
    }
  }, [reinitializeAdContainer]);

  // Automatically accept cookies and load ads
  const acceptCookies = useCallback(() => {
    localStorage.setItem("cookiesAccepted", "true");

    // Set the cookie via backend endpoint using .text() to avoid JSON parse errors
    fetch("https://backend-dictionary.onrender.com/set-ad-cookie", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.text())
      .then((data) => console.log("Set cookie response:", data))
      .catch((err) => console.error("Error setting cookie:", err));

    // Get the cookie via backend endpoint using .text()
    fetch("https://backend-dictionary.onrender.com/get-ad-cookie", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.text())
      .then((data) => console.log("Get cookie response:", data))
      .catch((err) => console.error("Error getting cookie:", err));

    loadAds();
  }, [loadAds]);

  useEffect(() => {
    if (localStorage.getItem("cookiesAccepted") !== "true") {
      acceptCookies();
    } else {
      loadAds();
    }
  }, [acceptCookies, loadAds]);

  // No UI elements are rendered for cookie consent or ad load—ads load automatically.
  return <div className="p-4"><div id="ad-placeholder"></div></div>;
};

export default GoogleAd;
