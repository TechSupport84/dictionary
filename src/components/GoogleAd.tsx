import { useEffect, useState } from "react";

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

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted") === "true";
    if (accepted) {
      setCookiesAccepted(true);
      loadAds();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
    loadAds();
  };

  const loadAds = () => {
    if (typeof window !== "undefined") {
      const scriptId = "adsbygoogle-js";
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }

      script.onload = () => {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
          
        }
      };
    }
  };

  const handleUserInteraction = () => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
     
    }
  };

  return (
    <div>
      {!cookiesAccepted && (
        <div style={{ marginBottom: "10px", padding: "10px", background: "#f8d7da" }}>
          <p>This site uses cookies to serve ads. Please accept cookies to view ads.</p>
          <button onClick={acceptCookies}>Accept Cookies</button>
        </div>
      )}
      {cookiesAccepted && (
        <>
          <button onClick={handleUserInteraction} style={{ marginBottom: "10px" }}>
            Load Ad
          </button>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8628829898524808"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
          ></ins>
        </>
      )}
    </div>
  );
};

export default GoogleAd;