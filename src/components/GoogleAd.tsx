import { useEffect } from "react";

interface GoogleAdProps {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
}

// Extend the Window interface for TypeScript support
declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const GoogleAd: React.FC<GoogleAdProps> = ({ slot, format = "auto", fullWidthResponsive = true }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const scriptId = "adsbygoogle-js";

        // Check if AdSense script is already present
        if (!document.getElementById(scriptId)) {
          const script = document.createElement("script");
          script.id = scriptId;
          script.async = true;
          script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
          script.crossOrigin = "anonymous";
          script.nonce = "your-nonce-value"; // Add nonce for CSP compliance
          document.body.appendChild(script);

          // Ensure ads load only after script is ready
          script.onload = () => {
            if (window.adsbygoogle) {
              window.adsbygoogle.push({});
            }
          };
        } else {
          // Script is already loaded, just push ads
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
          }
        }
      }, 500); // Small delay to avoid tracking blocks
    }
  }, []);

  const handleUserInteraction = () => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  };

  return (
    <div>
      <button onClick={handleUserInteraction} style={{ marginBottom: "10px" }}>Load Ad</button>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8628829898524808"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      ></ins>
    </div>
  );
};

export default GoogleAd;
