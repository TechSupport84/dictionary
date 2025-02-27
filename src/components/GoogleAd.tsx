import { useEffect } from "react";

interface GoogleAdProps {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
}

// Extend the Window interface to fix TypeScript errors
declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const GoogleAd: React.FC<GoogleAdProps> = ({ slot, format = "auto", fullWidthResponsive = true }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load AdSense script dynamically if it's not already present
      const scriptId = "adsbygoogle-js";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8628829898524808";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }

      // Initialize Google Ads after script loads
      window.adsbygoogle = window.adsbygoogle || [];
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8628829898524808"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    ></ins>
  );
};

export default GoogleAd;
