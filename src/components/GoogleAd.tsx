import { useEffect, useState, useCallback } from "react";

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
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

  // Clears the ad placeholder before creating a new ad container
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

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted") === "true";
    if (accepted) {
      setCookiesAccepted(true);
      loadAds();
    }
  }, [loadAds]);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);

    // Set the cookie via backend endpoint using .text() to avoid JSON parse errors.
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
  };

  const handleUserInteraction = () => {
    loadAds();
  };

  return (
    <div className="p-4">
      {!cookiesAccepted && (
        <div className="mb-5 p-4 bg-red-100 rounded">
          <p className="mb-3">
            This site uses cookies to serve ads. Please accept cookies to view ads.
          </p>
          <button
            onClick={acceptCookies}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Accept Cookies
          </button>
        </div>
      )}

      {cookiesAccepted && (
        <>
          <button
            onClick={handleUserInteraction}
            className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Load Ad
          </button>
          <div id="ad-placeholder"></div>
        </>
      )}
    </div>
  );
};

export default GoogleAd;
