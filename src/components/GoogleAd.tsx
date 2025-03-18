import { useEffect } from "react";

const GoogleAd: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-ad-client", "ca-pub-8628829898524808"); // Replace with your AdSense Publisher ID
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight: "250px" }}
      data-ad-client="ca-pub-8628829898524808" // Replace with your AdSense Publisher ID
      data-ad-slot="9137501297" // Replace with your Ad slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAd;
