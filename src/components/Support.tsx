import { useEffect } from 'react';

const Support: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://storage.ko-fi.com/cdn/widget/Widget_2.js';
    script1.async = true;
    
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.innerHTML = "kofiwidget2.init('Support me on Ko-fi', '#72a4f2', 'J3J019Z41E');kofiwidget2.draw();";
      document.getElementById('ko-fi-container')?.appendChild(script2);
    };
    
    document.body.appendChild(script1);
    
    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div>
      <h2>Support This Project</h2>
      <p>If you find this dictionary helpful, consider supporting us on Ko-fi.</p>
      <div id="ko-fi-container"></div>
    </div>
  );
};

export default Support;
