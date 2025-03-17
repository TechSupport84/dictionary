import { useEffect } from "react";

interface GoogleAdProps {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
}

// Extend the Window interface for TypeScript support
declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

const GoogleAd: React.FC<GoogleAdProps> = ({ slot, format = "auto", fullWidthResponsive = true }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scriptId = "adsbygoogle-js";

      // Check if AdSense script is already loaded
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        // Ensure ads load only after script is ready
        script.onload = () => {
          setTimeout(() => {
            if (window.adsbygoogle) {
              window.adsbygoogle.push({});
            }
          }, 500); // Add slight delay to bypass tracking prevention
        };

        script.onerror = () => {
          console.error("Google AdSense script failed to load.");
        };
      } else {
        // Script is already loaded, just push ads
        setTimeout(() => {
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
          }
        }, 500);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight: "90px" }} // Ensure height to avoid blank space
      data-ad-client="ca-pub-8628829898524808"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      data-adsbygoogle-status="done"
    ></ins>
  );
};

export default GoogleAd;
